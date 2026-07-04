import { Resend } from "resend";

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Resend API key is not configured.");
  }

  return new Resend(apiKey);
}

export const EMAIL_FROM = "TheMindRise.ai <noreply@themindrise.ai>";
export const BUSINESS_EMAIL = "contact@themindrise.ai";
