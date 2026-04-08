"use client";

import { useState } from "react";

interface InquiryFormProps {
  /** "home" uses Name/LastName/Email/Phone/Company/Subject/Inquiry
   *  "about" uses Name/LastName/Email/Phone/CompanyName/Inquiry
   *  "products" | "contact" uses Name/LastName/Email/Phone(opt)/Company(opt)/Inquiry */
  variant?: "home" | "about" | "products" | "contact";
  title?: string;
  subtitle?: string;
}

export default function InquiryForm({
  variant = "contact",
  title = "Have a Question?",
  subtitle = "Send an Inquiry!",
}: InquiryFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    inquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to backend/email service
    alert("Thank you! We will get back to you soon.");
  };

  const phonePlaceholder =
    variant === "home"
      ? "Phone (please incude country code)"
      : variant === "about"
      ? "Phone"
      : "Phone (optional, please incude country code)";

  const companyPlaceholder =
    variant === "about" ? "Company Name" : variant === "home" ? "Company" : "Company (optional)";

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: heading + description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0E1E4A] leading-tight mb-3">
              {title}
              {subtitle && <><br />{subtitle}</>}
            </h2>
            <div className="w-12 h-1 bg-[#00AE38] rounded-full mb-5" />
            <p className="text-[#0E1E4A] text-base lg:text-lg leading-relaxed">
              We&apos;re here to answer any questions you have. Fill out the
              form or reach us via email or phone. Our team will get back to you
              {variant === "about" ? "shortly." : "within 24 hours."}
            </p>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
              <input
                className="form-input"
                type="text"
                name="firstName"
                placeholder={variant === "home" ? "*Name" : "Name"}
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="form-input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="form-input"
              type="tel"
              name="phone"
              placeholder={phonePlaceholder}
              value={form.phone}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="text"
              name="company"
              placeholder={companyPlaceholder}
              value={form.company}
              onChange={handleChange}
            />
            {variant === "home" && (
              <input
                className="form-input"
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            )}
            <textarea
              className="form-input resize-none"
              name="inquiry"
              placeholder="Your Inquiry"
              rows={5}
              value={form.inquiry}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-navy mt-2 self-stretch">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
