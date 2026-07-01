"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContactFormState } from "@/types";

const initialValues = { name: "", email: "", subject: "", message: "" };

const inputStyles =
  "w-full rounded-xl border border-hairline bg-white/5 px-4 py-3 text-sm text-fog-100 placeholder:text-fog-400/70 transition-colors focus:border-brand-teal/60 focus:outline-none focus:ring-2 focus:ring-brand-teal/20";

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [state, setState] = useState<ContactFormState>({ status: "idle" });

  const isSubmitting = state.status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong. Please try again.");
      }

      setState({ status: "success" });
      setValues(initialValues);
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-brand-teal/30 bg-panel-solid/60 p-10 text-center"
      >
        <p className="font-display text-lg font-bold text-fog-100">
          Message sent
        </p>
        <p className="mt-2 max-w-sm text-sm text-fog-400">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setState({ status: "idle" })}
          className="mt-6 text-sm font-medium text-brand-teal hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-hairline bg-panel-solid/60 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className={inputStyles}
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your Email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className={inputStyles}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Subject"
            value={values.subject}
            onChange={(e) => setValues((v) => ({ ...v, subject: e.target.value }))}
            className={inputStyles}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            className={cn(inputStyles, "resize-none")}
          />
        </div>
      </div>

      {state.status === "error" ? (
        <p role="alert" className="mt-4 text-sm text-red-400">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}
