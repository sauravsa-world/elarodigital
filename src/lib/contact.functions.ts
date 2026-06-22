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
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        formData.append(key, String(value));
      }
    });

    formData.append("_subject", "New lead from Elarodigital website");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to submit contact form");
    }

    return { success: true };
  });
