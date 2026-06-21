## Plan: Update contact details + fix service detail page routing

### 1. Fix service-detail page links
**Problem:** The route tree shows `/services/$slug` as a child of `/services`, but `src/routes/services.tsx` renders the service list directly with no `<Outlet />`. In TanStack Router this means child routes match the URL but their content is never rendered, so clicking any service card appears to do nothing.

**Fix:**
- Convert `src/routes/services.tsx` into a layout route that only renders `<Outlet />`.
- Move the existing service-list markup into a new `src/routes/services.index.tsx` file so `/services` still shows the list.
- Keep `src/routes/services.$slug.tsx` unchanged except for the contact-number updates below.
- Verify service cards navigate to `/services/<slug>` and the detail page renders.

### 2. Update WhatsApp / phone number to 9431011994 everywhere
Replace the placeholder `+91 99999 99999` and `https://wa.me/919999999999` with the real number:
- `src/routes/services.$slug.tsx` — update `WHATSAPP_URL` constant to `https://wa.me/919431011994`.
- `src/components/site/Footer.tsx` — update mobile `tel:` link and displayed number to `+91 94310 11994`.
- `src/routes/contact.tsx` — update Call `tel:` link and WhatsApp `wa.me` link to `9431011994`.
- `src/components/site/Hero.tsx` — add a "WhatsApp Now" CTA alongside the existing buttons using the same number, so the hero also uses the real WhatsApp number.

### 3. Update office address to "Powerganj, Bairagi, Gaya, Bihar"
- `src/components/site/Footer.tsx` — change address text from "Patna, Bihar, India" to "Powerganj, Bairagi, Gaya, Bihar".
- `src/routes/contact.tsx` — change Office card value from "Patna, Bihar" to "Powerganj, Bairagi, Gaya, Bihar".

### 4. Verification
- Run the dev build to confirm no TypeScript/routing errors.
- Click service cards on Home, `/services`, and Related Services to confirm detail pages load.
- Check Footer and Contact page phone/address display.
- Check WhatsApp links open `wa.me/919431011994`.

Files to change:
- `src/routes/services.tsx` (becomes layout)
- `src/routes/services.index.tsx` (new list page)
- `src/routes/services.$slug.tsx`
- `src/components/site/Footer.tsx`
- `src/routes/contact.tsx`
- `src/components/site/Hero.tsx`
