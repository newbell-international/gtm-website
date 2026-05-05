import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquiryForm from "../components/InquiryForm";
import FadeIn from "../components/FadeIn";
import HeroContent from "../components/HeroContent";

const coreValues = [
  "Customer\nOriented\nApproach",
  "Quality &\nTrusted\nProducts",
  "Focus on\nSustainability\n& Social\nResponsibility",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* 1. HERO */}
      <section className="relative min-h-[55vh] flex items-center justify-center text-center pt-16 lg:pt-20">
        <Image
          src="/manufacturing-3.png"
          alt="Chemical plant"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 px-6 max-w-5xl mx-auto py-20">
          <HeroContent
            badge="Our Story"
            headingLine1="Built on Chemistry."
            headingLine2="Driven by People."
            subtitle="We are chemical solutions providers with deep expertise in water treatment and industrial applications. We believe the best chemistry starts with the right relationship."
          />
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0E1E4A] mb-3">
                Our Story
              </h2>
              <div className="w-12 h-1 bg-[#00AE38] rounded-full mb-8" />
              <div className="space-y-5 text-[#0E1E4A] text-base lg:text-lg leading-relaxed">
                <p>
                  G.T.M. Impex Chemicals was founded on a simple principle: that the chemical
                  industry deserves a provider that takes the time to truly understand the problem
                  before recommending the solution.
                </p>
                <p>
                  We are a well-established organization handling various specialty chemicals,
                  polymers, commodities and additives.
                </p>
                <p>
                  We have expertise to understand customer needs across various applications such
                  as Water Treatment, Chemicals, Pharmaceuticals, Detergents, Food, Feed, and more.
                </p>
                <p>
                  <Link href="/products" className="text-[#0E1E4A] font-semibold underline hover:opacity-70 transition-opacity">
                    Click here to dive deeper into our key products.
                  </Link>
                </p>
              </div>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3 h-[480px]">
              {/* Left: tall image */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/20 hover:border-[#00AE38]/40 shadow-lg hover:shadow-xl transition-all duration-500">
                <Image
                  src="/WhatsApp Image 2569-02-26 at 15.43.30.jpeg"
                  alt="G.T.M. Chemicals cooling tower"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Right: two stacked images */}
              <div className="flex flex-col gap-3 h-full">
                <div className="group relative flex-1 rounded-2xl overflow-hidden border border-white/20 hover:border-[#00AE38]/40 shadow-lg hover:shadow-xl transition-all duration-500">
                  <Image
                    src="/WhatsApp Image 2569-02-26 at 15.43.33.jpeg"
                    alt="G.T.M. Chemicals storage tanks"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="group relative flex-1 rounded-2xl overflow-hidden border border-white/20 hover:border-[#00AE38]/40 shadow-lg hover:shadow-xl transition-all duration-500">
                  <Image
                    src="/istockphoto-693254518-612x612.jpg"
                    alt="G.T.M. Chemicals delivery truck"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE VALUES */}
      <section className="relative py-20 lg:py-28">
        <Image
          src="/images copy.jpeg"
          alt="Business handshake"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0E1E4A]/80" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-3">
            Our Core Values
          </h2>
          <div className="w-12 h-1 bg-[#00AE38] rounded-full mx-auto mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <FadeIn key={value} delay={i * 120} className="h-full">
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 h-full">
                  <div className="h-full rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-white shadow-lg relative overflow-hidden hover:border-[#00AE38]/40 hover:shadow-[#00AE38]/10 hover:shadow-xl transition-all duration-500">
                    {/* Background glow effects */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-tr from-[#00AE38]/10 to-transparent blur-3xl opacity-30 group-hover:opacity-60 transform group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-bl from-[#00AE38]/5 to-transparent blur-2xl opacity-20 group-hover:opacity-50 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                    </div>
                    {/* Top green accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00AE38] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Content */}
                    <div className="relative z-10 p-12 flex flex-col items-center justify-center text-center h-full min-h-[220px]">
                      <p className="text-[#0E1E4A] font-bold text-2xl leading-snug whitespace-pre-line">
                        {value}
                      </p>
                      <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#00AE38] to-transparent rounded-full transform group-hover:w-1/2 transition-all duration-500" />
                    </div>
                    {/* Corner glows on hover */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#00AE38]/8 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#00AE38]/8 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INQUIRY FORM */}
      <InquiryForm
        variant="about"
        title="Have a Question?"
        subtitle="Send an Inquiry!"
      />

      <Footer />
    </>
  );
}
