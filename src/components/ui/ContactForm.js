"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { validateContactForm } from "@/lib/validation";

const INITIAL_VALUES = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "", // Honeypot field
};

/**
 * Ashik-styled Contact Form (Stage 1 — Visual UI & Client Validation Only).
 * Confirmed Decision (CD-05): Live email delivery remains unimplemented until
 * destination email and delivery provider are confirmed (PA-05).
 */
export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (statusMessage) {
      setStatusMessage(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Silent honeypot guard
    if (values.website.trim() !== "") {
      return;
    }

    const result = validateContactForm(values);
    if (!result.isValid) {
      setErrors(result.errors);
      setStatusMessage(null);
      return;
    }

    setErrors({});
    setStatusMessage({
      type: "info",
      text: "Your inquiry details look valid. Live email delivery is intentionally paused until the destination email and delivery provider are confirmed.",
    });
  };

  const inputBaseClass =
    "w-full rounded-[10px] border bg-transparent px-[20px] py-[15px] text-[15px] leading-[24px] text-heading placeholder:text-muted/80 transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[30px] bg-canvas p-[28px_20px] sm:p-[40px] lg:p-[54px_40px] ashik-card-shadow border border-black/[0.04]"
    >
      <div className="mb-7">
        <h3 className="text-[24px] sm:text-[28px] leading-[34px] font-bold text-heading">
          Send a Message
        </h3>
        <p className="mt-1.5 text-[14px] leading-[22px] text-muted">
          Share your project scope or timeline. Email delivery will be enabled
          once the recipient inbox and provider are finalized.
        </p>
      </div>

      {/* Hidden Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-[14px] font-semibold text-heading mb-2"
            >
              Your Name <span className="text-contrast">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Enter your full name"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className={`${inputBaseClass} ${
                errors.name
                  ? "border-red-600 focus:border-red-600"
                  : "border-black/15 focus:border-heading"
              }`}
            />
            {errors.name && (
              <p
                id="contact-name-error"
                role="alert"
                className="mt-1.5 text-[13px] text-red-700"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-[14px] font-semibold text-heading mb-2"
            >
              Email Address <span className="text-contrast">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={`${inputBaseClass} ${
                errors.email
                  ? "border-red-600 focus:border-red-600"
                  : "border-black/15 focus:border-heading"
              }`}
            />
            {errors.email && (
              <p
                id="contact-email-error"
                role="alert"
                className="mt-1.5 text-[13px] text-red-700"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Service / Subject */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-[14px] font-semibold text-heading mb-2"
          >
            Service Needed
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            className={`${inputBaseClass} border-black/15 focus:border-heading bg-canvas`}
          >
            <option value="">Select a service (optional)</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-[14px] font-semibold text-heading mb-2"
          >
            Project Details <span className="text-contrast">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Tell me about your website goals, pages needed, or current site..."
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`${inputBaseClass} resize-none ${
              errors.message
                ? "border-red-600 focus:border-red-600"
                : "border-black/15 focus:border-heading"
            }`}
          />
          {errors.message && (
            <p
              id="contact-message-error"
              role="alert"
              className="mt-1.5 text-[13px] text-red-700"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Honest Stage-1 Validation Notice */}
        {statusMessage && (
          <div
            role="status"
            className="rounded-[12px] bg-surface border border-black/12 px-4 py-3.5 text-[14px] leading-[22px] text-heading"
          >
            {statusMessage.text}
          </div>
        )}

        <div className="pt-1">
          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            Send Message
          </Button>
        </div>
      </div>
    </form>
  );
}
