"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroContent from "../components/HeroContent";

// ─── Inline form (contact page has its own layout) ─────────────
function ContactForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", company: "", inquiry: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <input className="form-input" type="text" name="firstName" placeholder="Name" value={form.firstName} onChange={handleChange} required />
        <input className="form-input" type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
      </div>
      <input className="form-input" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input className="form-input" type="tel" name="phone" placeholder="Phone (optional, please incude country code)" value={form.phone} onChange={handleChange} />
      <input className="form-input" type="text" name="company" placeholder="Company (optional)" value={form.company} onChange={handleChange} />
      <textarea className="form-input resize-none" name="inquiry" placeholder="Your Inquiry" rows={5} value={form.inquiry} onChange={handleChange} required />
      <button type="submit" className="btn-navy mt-2 self-stretch">SUBMIT</button>
    </form>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* 1. HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center pt-16 lg:pt-20">
        <Image
          src="/pdf_img_p4_1_1920x1080.png"
          alt="Chemical plant at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto py-20">
          <HeroContent
            badge="Get In Touch"
            headingLine1="Let's Find"
            headingLine2="Your Solution"
            subtitle="Tell us about your requirements and we'll respond with a tailored recommendation. Whether you need technical specifications, pricing, or a consultation on which chemistry best fits your process, we are ready to help."
          />
        </div>
      </section>

      {/* 2. SEND AN INQUIRY */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: heading + description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0E1E4A] leading-tight mb-3">
                Send an Inquiry
              </h2>
              <div className="w-12 h-1 bg-[#00AE38] rounded-full mb-5" />
              <p className="text-[#0E1E4A] text-base lg:text-lg leading-relaxed">
                We&apos;re here to answer any questions you have. Fill out the form or reach
                us via email or phone.
              </p>
            </div>
            {/* Right: form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 3. CONTACT US — info + map */}
      <section className="relative py-16 lg:py-20">
        <Image
          src="/manufacturing-3.png"
          alt="Industrial plant"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0E1E4A]/88" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-14">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Contact details */}
            <div className="space-y-8 text-white">
              <div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-base leading-relaxed opacity-90">
                  <span className="text-lg font-bold">G.T.M. Impex Co. Ltd.</span><br />
                  318/31 Soi Sukhumvit 22, Sukhumvit Road<br />
                  Kwaeng Klongtoey, Khet Klongtoey<br />
                  Bangkok Bangkok 10110
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-base opacity-90 space-y-1">
                  +66 61 413 4322<br />
                  +66 98 854 0410<br />
                  (+66 2-204-1645)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fax</h3>
                <p className="text-base opacity-90">+66-2-261-0874</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:customerservices@newbell.net"
                  className="text-base opacity-90 hover:opacity-100 underline"
                >
                  customerservices@newbell.net
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 lg:h-[420px] rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://maps.google.com/maps?q=13.7214792,100.5641581&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Newbell International Trading — Sukhumvit 22, Bangkok"
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
