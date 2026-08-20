import { supabase } from "@/integrations/supabase/client";

export type Template = {
  id: string;
  name: string;
  category: string;
  type: string;
  description: string;
  use_case: string;
  preview_image: string | null;
  tags: string[];
  is_featured: boolean;
  is_active: boolean;
};

export type SelectedTemplate = {
  id: string;
  name: string;
  category: string;
  type: string;
};

export const TEMPLATE_BUCKET = "template-uploads";

/** Reads the active library. Templates live in the database so the team can
 *  add/remove designs later from an admin dashboard without a code change. */
export async function fetchTemplates(): Promise<Template[]> {
  const { data, error } = await supabase
    .from("templates")
    .select("id,name,category,type,description,use_case,preview_image,tags,is_featured,is_active")
    .eq("is_active", true)
    .order("is_featured", { ascending: false })
    .order("name", { ascending: true });

  if (error) throw error;
  return (data ?? []) as Template[];
}

export async function uploadTemplateFile(file: File, folder: string): Promise<string> {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").slice(-60);
  const path = `${folder}/${crypto.randomUUID()}-${safeName}`;
  const { error } = await supabase.storage.from(TEMPLATE_BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;
  return path;
}

export type TemplateRequestPayload = {
  business_name: string;
  category: string;
  phone: string;
  whatsapp: string | null;
  email: string | null;
  website: string | null;
  location: string;
  social_links: Record<string, string>;
  logo_url: string | null;
  brand_colors: Record<string, string>;
  font_preference: string | null;
  tagline: string | null;
  products_services: Record<string, string>;
  offer: string | null;
  cta: string | null;
  uploaded_images: string[];
  selected_templates: SelectedTemplate[];
  special_instructions: string | null;
};

export async function submitTemplateRequest(payload: TemplateRequestPayload) {
  const { error } = await supabase.from("template_requests").insert({
    ...payload,
    plan: "free-first-month",
    status: "New",
  });
  if (error) throw error;
}