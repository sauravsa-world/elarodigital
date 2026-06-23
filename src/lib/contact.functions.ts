import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const CONTACT_EMAIL = "elarodigitalagency@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1, "Name is required"),
      phone: z.string().min(1, "Phone is required"),
      email: z.string().email("Valid email is required"),
      business: z.string().optional(),
      service: z.string().optional(),
      message: z.string().optional(),
    })
  )
  .handler(async ({ data }) => {
    const payload: Record<string, string> = {
      _subject: "New lead from Elarodigital website",
      _template: "table",
      _captcha: "false",
    };
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        payload[key] = String(value);
      }
    });

    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://elarodigital.lovable.app",
        Referer: "https://elarodigital.lovable.app/contact",
      },
      body: JSON.stringify(payload),
    });

    const result = (await response.json().catch(() => ({}))) as {
      success?: string | boolean;
      message?: string;
    };

    if (!response.ok || String(result.success) !== "true") {
      throw new Error(result.message || "Failed to submit contact form");
    }

    return { success: true };
  });
