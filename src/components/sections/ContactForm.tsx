"use client";

import {
  ArrowRight,
  Check,
  Ellipsis,
  LoaderCircle,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  User,
  type LucideIcon,
} from "lucide-react";
import { FormEvent, ReactNode, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "message" | "services", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED_CHARS = /^[0-9+\-().\s]{7,20}$/;
const MESSAGE_MAX_LENGTH = 500;

/* Web3Forms submission — the form posts directly to Web3Forms from the
   browser; there is no custom backend endpoint. The access key is the
   public form key issued for this website (Web3Forms design). */
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "e5d2872a-b43a-41e6-bfaf-01420dc9eb0a";

function digitsOnly(value: string): string {
  return value.replace(/[^\d]/g, "");
}

/* ------------------------------------------------------------------ */
/* Service tile data — visual copy per the reference design.           */
/* ------------------------------------------------------------------ */

type ServiceOption = {
  id: string;
  label: string;
  description: string;
  /** Original 3D stone service artwork (public/services). */
  image?: string;
  /** Neutral fallback glyph for options with no artwork ("Other"). */
  icon?: ReactNode;
};

const serviceOptions: ServiceOption[] = [
  {
    id: "performance-marketing",
    label: "Performance Marketing",
    description: "Drive measurable growth with data-driven campaigns.",
    image: "/services/performance-marketing.webp",
  },
  {
    id: "google-ads",
    label: "Google Ads",
    description: "Get quality leads and higher conversions.",
    image: "/services/google-ads.webp",
  },
  {
    id: "meta-ads",
    label: "Meta Ads",
    description: "Reach, engage and scale with Meta platforms.",
    image: "/services/meta-ads.webp",
  },
  {
    id: "seo",
    label: "SEO",
    description: "Rank higher. Get found. Grow organically.",
    image: "/services/seo.webp",
  },
  {
    id: "social-media-marketing",
    label: "Social Media Marketing",
    description: "Build your brand and community.",
    image: "/services/social-media-marketing.webp",
  },
  {
    id: "lead-generation",
    label: "Lead Generation",
    description: "Turn interest into revenue.",
    image: "/services/lead-generation.webp",
  },
  {
    id: "website-design-development",
    label: "Website Design & Development",
    description: "High-performing, modern websites.",
    image: "/services/website-design-development.webp",
  },
  {
    id: "branding-creative",
    label: "Branding & Creative",
    description: "Build a brand that stands out.",
    image: "/services/branding-creative.webp",
  },
  {
    id: "ai-automation",
    label: "AI Automation & AI Agents",
    description: "Automate. Accelerate. Grow.",
    image: "/services/ai-automation.webp",
  },
  {
    id: "custom-web-apps-software",
    label: "Custom Web Apps & Software",
    description: "Tailored solutions for your business.",
    image: "/services/custom-web-apps-software.webp",
  },
  {
    id: "other",
    label: "Other (Please specify)",
    description: "Tell us what you need.",
    icon: <Ellipsis className="h-[22px] w-[22px]" aria-hidden="true" />,
  },
];

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

function validate(
  values: { name: string; phone: string; email: string; message: string },
  services: string[],
): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = "Enter your phone number.";
  } else if (!PHONE_ALLOWED_CHARS.test(phone) || digitsOnly(phone).length < 7 || digitsOnly(phone).length > 15) {
    errors.phone = "Enter a valid phone number.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (services.length === 0) {
    errors.services = "Select at least one service.";
  }

  if (!values.message.trim() || values.message.trim().length < 5) {
    errors.message = "Enter a short message.";
  } else if (values.message.length > MESSAGE_MAX_LENGTH) {
    errors.message = "Message is too long.";
  }

  return errors;
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [messageLength, setMessageLength] = useState(0);
  const submittingRef = useRef(false);

  function toggleService(label: string) {
    setSelectedServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label],
    );
    // Clear the services error as soon as the visitor interacts again.
    setFieldErrors((prev) => {
      if (!prev.services) return prev;
      const next = { ...prev };
      delete next.services;
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Guards against double-submits from a fast double-click or a stuck
    // click event, on top of the disabled submit button below.
    if (submittingRef.current) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    const botcheck = String(formData.get("botcheck") ?? "");

    const errors = validate(values, selectedServices);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      return;
    }

    submittingRef.current = true;
    setStatus("submitting");

    try {
      // Direct POST to Web3Forms. All existing fields are mapped 1:1;
      // `services` (multi-select) is sent as a readable comma list and a
      // descriptive subject is provided for the notification email.
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
          services: selectedServices.join(", "),
          subject: `New enquiry from ${values.name.trim()} — shriprocraft.com`,
          from_name: "Shri Pro Craft Website",
          // Honeypot: Web3Forms silently discards submissions when filled.
          botcheck,
        }),
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setStatus("success");
        setFieldErrors({});
        form.reset();
        setSelectedServices([]);
        setMessageLength(0);
      } else {
        setFieldErrors(result?.fieldErrors ?? {});
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-hairline bg-paper p-8 text-center shadow-[0_1px_2px_rgba(10,10,10,0.04),0_28px_72px_-28px_rgba(10,10,10,0.22)] sm:p-10"
      >
        <span
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand"
        >
          <Check size={22} />
        </span>
        <h2 className="heading-2 mt-6">Message sent.</h2>
        <p className="body-lg mt-3 max-w-[42ch] text-grey">
          Thank you! Your message has been sent successfully. Our team will
          get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="@container rounded-3xl border border-hairline bg-paper p-6 shadow-[0_1px_2px_rgba(10,10,10,0.04),0_28px_72px_-28px_rgba(10,10,10,0.22)] sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-6">
        {/* Honeypot field for spam protection */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        {/* Row 1 — Name + Phone Number */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" htmlFor="name" required error={fieldErrors.name}>
            <IconInput
              id="name"
              name="name"
              type="text"
              required
              icon={User}
              placeholder="Your full name"
              autoComplete="name"
              error={Boolean(fieldErrors.name)}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
            />
          </Field>
          <Field label="Phone Number" htmlFor="phone" required error={fieldErrors.phone}>
            <IconInput
              id="phone"
              name="phone"
              type="tel"
              required
              icon={Phone}
              placeholder="+91 98765 43210"
              autoComplete="tel"
              error={Boolean(fieldErrors.phone)}
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            />
          </Field>
        </div>

        {/* Row 2 — Email */}
        <Field label="Email" htmlFor="email" required error={fieldErrors.email}>
          <IconInput
            id="email"
            name="email"
            type="email"
            required
            icon={Mail}
            placeholder="you@company.com"
            autoComplete="email"
            error={Boolean(fieldErrors.email)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
        </Field>

        {/* Services — multi-select tiles */}
        <div>
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
            <div>
              <p className="text-[0.9375rem] font-semibold text-ink">
                Services You&apos;re Interested in <span aria-hidden="true">*</span>
              </p>
              <p className="mt-1 text-[0.8125rem] text-grey">
                Choose the services that fit your goals. You can select multiple.
              </p>
            </div>
            <p className="flex items-center gap-2 text-[0.8125rem] font-semibold text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              Let&apos;s build something great together
            </p>
          </div>

          {fieldErrors.services && (
            <p id="services-error" role="alert" className="mt-2 text-[0.8125rem] text-red-600">
              {fieldErrors.services}
            </p>
          )}

          <div
            role="group"
            aria-label="Services you're interested in"
            className="mt-4 grid grid-cols-1 gap-3.5 @md:grid-cols-2 @4xl:grid-cols-3"
          >
            {serviceOptions.map((option) => (
              <ServiceTile
                key={option.id}
                option={option}
                selected={selectedServices.includes(option.label)}
                invalid={Boolean(fieldErrors.services)}
                onToggle={() => toggleService(option.label)}
              />
            ))}
          </div>
        </div>

        {/* Message */}
        <Field label="Message" htmlFor="message" required error={fieldErrors.message}>
          <div className="relative">
            <MessageSquare
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-4 h-[18px] w-[18px] text-greyLight"
            />
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={MESSAGE_MAX_LENGTH}
              onChange={(e) => setMessageLength(e.target.value.length)}
              placeholder="Tell us about your business and what you're trying to achieve."
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
              className={`min-h-[136px] w-full resize-none rounded-xl border bg-[#fbf8f2] pb-9 pl-11 pr-4 pt-3.5 text-[0.9375rem] leading-relaxed text-ink outline-none transition placeholder:text-greyLight focus:bg-[#fbf8f2] focus:ring-[3px] ${
                fieldErrors.message
                  ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                  : "border-[#eaeaea] focus:border-brand focus:ring-brand/10"
              }`}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-3 right-4 text-[0.75rem] tabular-nums text-greyLight"
            >
              {messageLength}/{MESSAGE_MAX_LENGTH}
            </span>
          </div>
        </Field>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-[#191817] text-[0.9375rem] font-semibold text-paper shadow-[0_10px_28px_-12px_rgba(25,24,23,0.55)] transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-[#2b2825] hover:shadow-[0_18px_40px_-14px_rgba(25,24,23,0.6)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle className="h-[18px] w-[18px] animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Start the Conversation
              <ArrowRight
                className="h-[18px] w-[18px] transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                aria-hidden="true"
              />
            </>
          )}
        </button>

        {/* Privacy note */}
        <p className="caption flex items-center justify-center gap-1.5">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          Your information is safe with us. We respect your privacy.
        </p>

        {status === "error" && Object.keys(fieldErrors).length === 0 && (
          <p role="alert" className="body-base text-ink2">
            Something went wrong while sending your message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                      */
/* ------------------------------------------------------------------ */

function ServiceTile({
  option,
  selected,
  invalid,
  onToggle,
}: {
  option: ServiceOption;
  selected: boolean;
  invalid: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={`group relative flex items-start gap-3.5 rounded-2xl border p-4 text-left transition-all duration-300 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 ${
        option.id === "other" ? "@md:col-span-2 @4xl:col-span-2" : ""
      } ${
        selected
          ? "border-brand bg-[linear-gradient(135deg,#f5faea_0%,#e9f4d8_100%)] shadow-[0_1px_2px_rgba(40,101,245,0.08),0_14px_30px_-18px_rgba(40,101,245,0.45)]"
          : `bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_100%)] shadow-[0_1px_2px_rgba(10,10,10,0.04),0_10px_24px_-18px_rgba(10,10,10,0.18)] hover:-translate-y-0.5 hover:border-[#dcdcdc] hover:shadow-[0_2px_4px_rgba(10,10,10,0.05),0_16px_32px_-18px_rgba(10,10,10,0.24)] ${
              invalid ? "border-red-200" : "border-white"
            }`
      }`}
    >
      {option.image ? (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center">
          <img
            src={option.image}
            alt=""
            width={256}
            height={256}
            draggable={false}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </span>
      ) : (
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
            selected ? "bg-[#d3defa] text-brand-deep" : "bg-brand-soft text-brand"
          }`}
        >
          {option.icon}
        </span>
      )}
      <span className="min-w-0 pr-9">
        <span className="block text-[0.9375rem] font-semibold leading-snug text-ink">
          {option.label}
        </span>
        <span className="mt-1 block text-[0.8125rem] leading-relaxed text-grey">
          {option.description}
        </span>
      </span>
      {selected ? (
        <span
          aria-hidden="true"
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white shadow-[0_2px_6px_rgba(40,101,245,0.4)]"
        >
          <Check size={14} strokeWidth={3} />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="absolute right-3.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-[#fbf8f2] text-ink shadow-[0_1px_2px_rgba(10,10,10,0.06)] transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
        >
          <ArrowRight size={15} />
        </span>
      )}
    </button>
  );
}

function IconInput({
  icon: Icon,
  error,
  ...props
}: {
  icon: LucideIcon;
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <Icon
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-greyLight"
      />
      <input
        {...props}
        className={`h-12 w-full rounded-xl border bg-[#fbf8f2] pl-11 pr-4 text-[0.9375rem] text-ink outline-none transition placeholder:text-greyLight focus:bg-[#fbf8f2] focus:ring-[3px] ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
            : "border-[#eaeaea] focus:border-brand focus:ring-brand/10"
        }`}
      />
    </div>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[0.8125rem] font-medium text-ink2">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-[0.8125rem] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
