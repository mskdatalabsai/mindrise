"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { DatePickerField } from "@/components/ui/DatePickerField";
import type { CalendarMode } from "@/components/ui/Calendar";
import { cn } from "@/lib/utils";
import type { ContactFormState } from "@/types";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayCheckoutOptions) => { open: () => void };
  }
}

interface RazorpayPaymentResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayCheckoutOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id: string;
  prefill?: { name?: string; email?: string; contact?: string };
  theme?: { color?: string };
  handler: (response: RazorpayPaymentResponse) => void;
  modal?: { ondismiss?: () => void };
}

interface EnrollmentModalProps {
  open: boolean;
  onClose: () => void;
  courseTitle: string;
  coursePrice: string;
  scheduleMode: CalendarMode;
}

const initialValues = { name: "", phone: "", email: "", message: "" };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LEARNING_PLATFORM_URL =
  process.env.NEXT_PUBLIC_LEARNING_PLATFORM_URL ?? "#";

const REDIRECT_DELAY_MS = 6000;

const inputStyles =
  "w-full rounded-xl border border-mist bg-cloud px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-blue/60 focus:outline-none focus:ring-2 focus:ring-brand-blue/15";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function EnrollmentModal({
  open,
  onClose,
  courseTitle,
  coursePrice,
  scheduleMode,
}: EnrollmentModalProps) {
  const [values, setValues] = useState(initialValues);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [state, setState] = useState<ContactFormState>({ status: "idle" });

  const isSubmitting = state.status === "submitting";

  useEffect(() => {
    if (state.status !== "success") return;

    const timer = setTimeout(() => {
      window.location.href = LEARNING_PLATFORM_URL;
    }, REDIRECT_DELAY_MS);

    return () => clearTimeout(timer);
  }, [state.status]);

  function reset() {
    setValues(initialValues);
    setSelectedDate(null);
    setState({ status: "idle" });
  }

  function handleClose() {
    onClose();
    reset();
  }

  async function finalizeEnrollment(payment: RazorpayPaymentResponse, confirmedDate: Date) {
    try {
      const verifyResponse = await fetch("/api/razorpay/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      });
      const verifyData = (await verifyResponse.json()) as { verified?: boolean; message?: string };

      if (!verifyResponse.ok || !verifyData.verified) {
        throw new Error(verifyData.message ?? "Payment verification failed.");
      }

      await fetch("/api/enrollment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          courseTitle,
          preferredDate: formatDate(confirmedDate),
          paymentId: payment.razorpay_payment_id,
          message: values.message,
        }),
      });

      setState({ status: "success" });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Payment succeeded but confirmation failed. Please contact us.",
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = values.name.trim();
    const trimmedEmail = values.email.trim();
    const trimmedPhone = values.phone.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      setState({ status: "error", message: "Name, email, and phone number are required." });
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setState({ status: "error", message: "Please enter a valid email address." });
      return;
    }

    if (!selectedDate) {
      setState({ status: "error", message: "Please select a preferred date." });
      return;
    }

    setState({ status: "submitting" });

    try {
      const orderResponse = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseTitle, price: coursePrice }),
      });
      const orderData = (await orderResponse.json()) as {
        orderId?: string;
        amount?: number;
        currency?: string;
        message?: string;
      };

      if (!orderResponse.ok || !orderData.orderId) {
        throw new Error(orderData.message ?? "Unable to start payment. Please try again.");
      }

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error("Unable to load the payment gateway. Please try again.");
      }

      const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!razorpayKey) {
        throw new Error("Payments are not configured yet.");
      }

      const checkout = new window.Razorpay({
        key: razorpayKey,
        amount: orderData.amount ?? 0,
        currency: orderData.currency ?? "INR",
        name: "TheMindRise.ai",
        description: courseTitle,
        order_id: orderData.orderId,
        prefill: { name: trimmedName, email: trimmedEmail, contact: trimmedPhone },
        theme: { color: "#4f6ef7" },
        handler: (response) => {
          void finalizeEnrollment(response, selectedDate);
        },
        modal: {
          ondismiss: () => {
            setState({ status: "idle" });
          },
        },
      });

      checkout.open();
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <Modal open={open} onClose={handleClose} title={`Enroll — ${courseTitle}`} className="max-w-lg">
      {state.status === "success" ? (
        <div className="py-4 text-center">
          <p className="font-display text-lg font-bold text-slate-900">Payment successful</p>
          <p className="mt-2 text-sm text-slate-500">
            You&rsquo;re registered for {courseTitle} on{" "}
            {selectedDate ? formatDate(selectedDate) : "your selected date"}. A confirmation
            email is on its way — your Zoom link and joining instructions will be sent to your
            email one day before the session.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Taking you to the learning platform now…
          </p>
          <a
            href={LEARNING_PLATFORM_URL}
            className="mt-5 inline-block text-sm font-medium text-brand-blue hover:underline"
          >
            Continue now
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <h3 className="pr-8 font-display text-lg font-bold text-slate-900">
            Enroll in {courseTitle}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {scheduleMode === "weekend"
              ? "This bootcamp runs on weekends — pick any available Saturday or Sunday."
              : scheduleMode === "weekday"
                ? "This bootcamp runs on weekdays — pick any available Monday to Friday."
                : "Self-paced — pick whatever start date works best for you."}
          </p>

          <div className="mt-4 grid gap-3">
            <input
              required
              type="text"
              placeholder="Your Name"
              value={values.name}
              onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              className={inputStyles}
            />
            <input
              required
              type="tel"
              placeholder="Phone Number"
              value={values.phone}
              onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
              className={inputStyles}
            />
            <input
              required
              type="email"
              placeholder="Your Email"
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              className={inputStyles}
            />
            <textarea
              rows={3}
              placeholder="Message (optional)"
              value={values.message}
              onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              className={cn(inputStyles, "resize-none")}
            />
          </div>

          <div className="mt-3">
            <DatePickerField
              mode={scheduleMode}
              selected={selectedDate}
              onSelect={setSelectedDate}
              placeholder={
                scheduleMode === "weekend"
                  ? "Select a Saturday or Sunday"
                  : scheduleMode === "weekday"
                    ? "Select a weekday"
                    : "Select a date"
              }
            />
          </div>

          {state.status === "error" ? (
            <p role="alert" className="mt-3 text-sm text-red-500">
              {state.message}
            </p>
          ) : null}

          <div className="mt-5 flex items-center justify-between text-sm">
            <span className="text-slate-500">Total</span>
            <span className="flex items-center gap-2">
              <span className="text-xs text-slate-400 line-through">{coursePrice}</span>
              {/* TEMPORARY: flat ₹1 while testing the live Razorpay integration — matches the server-side override in /api/razorpay/order. */}
              <span className="font-display text-base font-bold text-slate-900">₹1</span>
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-blue to-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Processing…
              </>
            ) : (
              <>
                Proceed to Payment
                <Send className="h-4 w-4" aria-hidden />
              </>
            )}
          </button>
        </form>
      )}
    </Modal>
  );
}
