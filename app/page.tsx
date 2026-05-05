import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InquiryForm from "./components/InquiryForm";
import FadeIn from "./components/FadeIn";
import HeroContent from "./components/HeroContent";
import HeroSlideshow from "./components/HeroSlideshow";

// ─── Data ─────────────────────────────────────────────────────
const applicationCards = [
  {
    title: "Water Treatment",
    body: "From potable water purification to effluent treatment, cooling tower and boiler maintenance, our chemicals meet the most stringent regulations.",
    image: "/7164.jpg",
  },
  {
    title: "Industrial Cleaning",
    body: "High grade Sodium Hydroxide, Hydrochloric Acid, Sodium Hypochlorite, and Hydrogen Peroxide for metal pickling, degreasing, sanitation, surface treatment, and related industrial applications.",
    image: "/2149878780.jpg",
  },
  {
    title: "More Applications",
    body: "Speciality chemicals for various industries such as Dairy, Poultry, Semi-Conductors, and Powerplants.",
    image: "/859.jpg",
  },
];

const offerings = [
  "Focus on\nSupply Chain\nManagement",
  "Customized\nSolutions with\nTechnical\nExpertise",
  "Environment\nSustainability\nDriven",
];

const distributors = [
  { src: "/116721_logo_20191105161131.webp", alt: "Aditya Birla Chemicals", w: 80, h: 40 },
  { src: "/logo-fineamin2.png", alt: "FINEAMIN", w: 160, h: 55 },
  { src: "/evonik2020.png", alt: "Evonik", w: 150, h: 55 },
  { src: "/MyTWA-LOGO_new_extended-4eb9c841.png", alt: "MyTWA Aqua Solutions", w: 280, h: 105 },
  { src: "/logo-2-2.svg", alt: "NCSP", w: 132, h: 60 },
  { src: "/logo-JMEnvronmentLab.png", alt: "JM Environment Lab", w: 70, h: 52 },
];

// ─── Page ──────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* 1. HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center text-center pt-16 lg:pt-20">
        <HeroSlideshow />
        <div className="relative z-20 px-6 max-w-4xl mx-auto">
          <HeroContent
            badge="G.T.M. Impex Co. Ltd."
            headingLine1="Solution Providers for"
            headingLine2="High Performing Chemicals"
            subtitle="Means for Sustainable Water Treatment to Industrial Cleaning Applications"
            subtitleSingleLine
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-white">
                Explore Our Products <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-1.5 bg-[#00AE38] hover:bg-[#009930] text-white font-bold px-8 py-3.5 rounded-full border-2 border-transparent transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,174,56,0.4)] whitespace-nowrap no-underline text-base tracking-wide">
                Get a Free Consultation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </HeroContent>
        </div>
      </section>

      {/* 2. COMMODITY & SPECIALTY CHEMICALS APPLICATIONS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E1E4A] text-center mb-3">
            Commodity &amp; Specialty Chemicals Applications
          </h2>
          <div className="w-12 h-1 bg-[#00AE38] rounded-full mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applicationCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 120}>
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 h-full">
                  <div className="relative rounded-2xl overflow-hidden min-h-[500px] flex flex-col justify-end border border-white/20 hover:border-[#00AE38]/40 shadow-lg hover:shadow-xl transition-all duration-500">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Bottom gradient for text readability only */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0E1E4A] via-[#0E1E4A]/70 to-transparent" />
                    {/* Top green accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00AE38] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    {/* Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                    {/* Content */}
                    <div className="relative z-10 p-7 text-center">
                      <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                      <p className="text-base text-white/90 leading-relaxed">{card.body}</p>
                      <div className="mt-5 mx-auto w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#00AE38] to-transparent rounded-full group-hover:w-1/2 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR OFFERINGS */}
      <section className="relative py-20 lg:py-24">
        <Image
          src="/thedigitalartist-ai-generated-8069992_1920.jpg"
          alt="Industrial background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0E1E4A]/80" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-3">
            Our Offerings
          </h2>
          <div className="w-12 h-1 bg-[#00AE38] rounded-full mx-auto mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((text, i) => (
              <FadeIn key={text} delay={i * 120} className="h-full">
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 h-full">
                  <div className="h-full rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-white shadow-lg relative overflow-hidden hover:border-[#00AE38]/40 hover:shadow-[#00AE38]/10 hover:shadow-xl">
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
                        {text}
                      </p>
                      {/* Bottom accent line */}
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

      {/* 4. DISTRIBUTORS OF */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E1E4A] text-center mb-3">
            Distributors of
          </h2>
          <div className="w-12 h-1 bg-[#00AE38] rounded-full mx-auto mb-12" />
          {/* Row 1: 3 logos */}
          <div className="grid grid-cols-3 items-center gap-y-12 gap-x-10 lg:gap-x-16 w-full">
            {distributors.map((d) => (
              <div key={d.alt} className="flex items-center justify-center">
                <Image
                  src={d.src}
                  alt={d.alt}
                  width={d.w * 2.4}
                  height={d.h * 2.4}
                  style={{ width: d.w * 2.4, height: "auto" }}
                  className="object-contain max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOOKING FOR THE RIGHT CHEMISTRY? */}
      <section className="relative py-20 lg:py-28 text-center">
        <Image
          src="/manufacturing-3.png"
          alt="Chemical plant"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0E1E4A]/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Looking for the Right Chemistry?
          </h2>
          <div className="w-12 h-1 bg-[#00AE38] rounded-full mx-auto mb-6" />
          <p className="text-white text-base lg:text-lg mb-10 leading-relaxed">
            Speak with our team about your requirements. We&apos;re here to tailor formulate,
            grade, supply arrangements and customer services to match your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Get a Free Consultation <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="btn-white">
              Speak with Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CONTACT FORM */}
      <InquiryForm
        variant="home"
        title="Have a Question?"
        subtitle="Send an Inquiry!"
      />

      <Footer />
    </>
  );
}
