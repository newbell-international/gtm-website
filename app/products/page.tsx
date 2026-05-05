import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquiryForm from "../components/InquiryForm";
import FadeIn from "../components/FadeIn";
import HeroContent from "../components/HeroContent";

// ─── Data ─────────────────────────────────────────────────────

const serviceCards = [
  {
    title: "Product\nConsultation by\nAnalyzing Market\nTrends",
    icon: "chart",
  },
  {
    title: "Product Delivery at\nAny Location in\nThailand",
    icon: "truck",
  },
  {
    title: "Supply Chain\nManagement",
    icon: "link",
  },
];

const segments = [
  {
    industry: "Chemicals Manufacturing",
    chemicals: "NaOH, HCl, H₂O₂",
    src: "/products/chemicalsmanufacturing.jpg",
  },
  {
    industry: "Water Treatment",
    chemicals: "NaOH, HCl, H₂O₂, Sodium Hypochlorite",
    src: "/products/watertreatment.jpg",
  },
  {
    industry: "Food Processing",
    chemicals: "NaOH, HCl, H₂O₂",
    src: "/products/foodprocessing_2.jpg",
  },
  {
    industry: "Electronics",
    chemicals: "NaOH, HCl, H₂O₂",
    src: "/products/electronics.jpg",
  },
  {
    industry: "Cleaning Products",
    chemicals: "NaOH, HCl, H₂O₂",
    src: "/products/cleaningproducts.jpg",
  },
  {
    industry: "Petroleum",
    chemicals: "NaOH, HCl, H₂O₂, Sodium Hypochlorite",
    src: "/products/petrolium.jpg",
  },
  {
    industry: "Pulp & Paper",
    chemicals: "NaOH, H₂O₂",
    src: "/products/pulp&paper.jpg",
  },
  {
    industry: "Pharmaceuticals",
    chemicals: "NaOH, HCl, H₂O₂, Sodium Hypochlorite",
    src: "/products/pharmaceuticals.jpg",
  },
  {
    industry: "Mining",
    chemicals: "H₂O₂",
    src: "/products/mining.jpg",
  },
];

// ─── Service card icon ─────────────────────────────────────────
function ServiceIcon({ name }: { name: string }) {
  if (name === "chart") return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
  if (name === "truck") return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function ProductsPage() {
  return (
    <>
      <Navbar />

      {/* 1. HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center pt-16 lg:pt-20">
        <Image
          src="/Tubes-for-Your-Lab.webp"
          alt="Chemical lab tubes"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 px-6 max-w-[46rem] mx-auto py-20">
          <HeroContent
            badge="Our Product Range"
            headingLine1="Quality Chemistry."
            headingLine2="Tailor-made Solutions."
            subtitle="We supply a solution engineered to the exact grade, concentration, and specification your application requires."
          />
        </div>
      </section>

      {/* 2. OUR SERVICES */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E1E4A] text-center mb-3">
            Our Services
          </h2>
          <div className="w-12 h-1 bg-[#00AE38] rounded-full mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 120} className="h-full">
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#0E1E4A] via-[#0a1535] to-[#0E1E4A] shadow-2xl relative overflow-hidden hover:border-[#00AE38]/30 hover:shadow-[#00AE38]/10 hover:shadow-2xl transition-all duration-500">
                    {/* Background glow effects */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-[#00AE38]/10 opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                      <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-tr from-[#00AE38]/15 to-transparent blur-3xl opacity-30 group-hover:opacity-60 transform group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-bl from-white/5 to-transparent blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                    </div>
                    {/* Top green accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00AE38] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Content */}
                    <div className="relative z-10 p-12 flex flex-col items-center justify-center text-center h-full min-h-[220px] gap-4">
                      <ServiceIcon name={card.icon} />
                      <p className="text-white font-bold text-2xl leading-snug whitespace-pre-line">
                        {card.title}
                      </p>
                      <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#00AE38] to-transparent rounded-full transform group-hover:w-1/2 transition-all duration-500" />
                    </div>
                    {/* Corner glows on hover */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#00AE38]/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#00AE38]/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KEY PRODUCTS & SEGMENTS — image card grid */}
      <section className="relative py-16 lg:py-20">
        <Image
          src="/thedigitalartist-ai-generated-8069992_1920.jpg"
          alt="Laboratory background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0E1E4A]/80" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-3">
            Key Products &amp; Segments
          </h2>
          <div className="w-12 h-1 bg-[#00AE38] rounded-full mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((seg, i) => (
              <FadeIn key={seg.industry} delay={i * 80} className="h-full">
                <SegmentCard {...seg} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INQUIRY FORM */}
      <InquiryForm
        variant="products"
        title="Send an Inquiry"
        subtitle=""
      />

      <Footer />
    </>
  );
}

function SegmentCard({ industry, chemicals, src }: { industry: string; chemicals: string; src: string }) {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 h-full">
      <div className="h-full bg-white rounded-2xl overflow-hidden flex flex-col border border-white/80 shadow-lg hover:shadow-xl hover:border-[#00AE38]/40 transition-all duration-500">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={src}
            alt={industry}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00AE38] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
        </div>
        <div className="px-5 py-4 text-center bg-white flex-1 flex flex-col items-center justify-center">
          <p className="text-[#0E1E4A] font-bold text-base sm:text-lg leading-snug">{industry}</p>
          <p className="text-[#0E1E4A]/70 text-sm sm:text-base mt-1">{chemicals}</p>
          <div className="mt-3 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#00AE38] to-transparent rounded-full group-hover:w-1/2 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
}
