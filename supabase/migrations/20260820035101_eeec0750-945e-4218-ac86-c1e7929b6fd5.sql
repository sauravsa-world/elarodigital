CREATE TABLE public.templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  type text NOT NULL,
  description text NOT NULL DEFAULT '',
  use_case text NOT NULL DEFAULT '',
  preview_image text,
  tags text[] NOT NULL DEFAULT '{}',
  is_featured boolean NOT NULL DEFAULT false,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.templates TO anon;
GRANT SELECT ON public.templates TO authenticated;
GRANT ALL ON public.templates TO service_role;
ALTER TABLE public.templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Active templates are publicly viewable" ON public.templates FOR SELECT TO anon, authenticated USING (is_active = true);

CREATE TABLE public.template_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text,
  business_name text NOT NULL,
  category text NOT NULL,
  phone text NOT NULL,
  whatsapp text,
  email text,
  website text,
  social_links jsonb NOT NULL DEFAULT '{}'::jsonb,
  location text NOT NULL,
  logo_url text,
  brand_colors jsonb NOT NULL DEFAULT '{}'::jsonb,
  font_preference text,
  tagline text,
  products_services jsonb NOT NULL DEFAULT '{}'::jsonb,
  offer text,
  cta text,
  uploaded_images text[] NOT NULL DEFAULT '{}',
  selected_templates jsonb NOT NULL DEFAULT '[]'::jsonb,
  special_instructions text,
  plan text NOT NULL DEFAULT 'free-first-month',
  upgrade_interest boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'New',
  submission_date timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT template_requests_status_check CHECK (status IN ('New','In Review','Customization in Progress','Completed','Delivered'))
);

GRANT INSERT ON public.template_requests TO anon;
GRANT INSERT ON public.template_requests TO authenticated;
GRANT ALL ON public.template_requests TO service_role;
ALTER TABLE public.template_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a template request" ON public.template_requests FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER templates_set_updated_at BEFORE UPDATE ON public.templates FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER template_requests_set_updated_at BEFORE UPDATE ON public.template_requests FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE POLICY "Anyone can upload template request files" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'template-uploads');

INSERT INTO public.templates (name, category, type, description, use_case, tags, is_featured)
SELECT
  c.label || ' ' || t.label,
  c.slug,
  t.type,
  'Editable ' || t.type || ' design built for ' || c.label || ' brands and customised with your logo, colours and contact details.',
  t.use_case,
  ARRAY[c.slug, lower(replace(t.type, ' ', '-')), 'social-media-templates'],
  (t.ord = 1)
FROM (VALUES
  ('restaurant-cafe','Restaurant & Cafe'),
  ('salon-beauty','Salon & Beauty'),
  ('real-estate','Real Estate'),
  ('gym-fitness','Gym & Fitness'),
  ('coaching-education','Coaching & Education'),
  ('local-business','Local Business'),
  ('ecommerce','E-commerce'),
  ('digital-marketing','Digital Marketing'),
  ('healthcare','Healthcare'),
  ('travel','Travel'),
  ('fashion','Fashion'),
  ('other-business','Other Business')
) AS c(slug, label),
(VALUES
  ('Instagram Post','Offer Spotlight','Announce a discount or limited-time offer',1),
  ('Instagram Story','Story Promo','Quick story update with a clear tap-through CTA',2),
  ('Carousel','Carousel Explainer','Explain your service or product in 3-5 slides',3),
  ('Festival Post','Festival Greeting','Wish customers on festivals with your branding',4)
) AS t(type, label, use_case, ord);