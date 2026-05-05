import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products & Services", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E1E4A]">
      {/* Gradient top divider */}
      <div className="h-px bg-gradient-to-r from-[#0E1E4A] via-[#292B85] to-[#0E1E4A]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Logo + tagline */}
          <div>
            <Link href="/" className="flex-shrink-0">
              <span
                className="text-white leading-tight block"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", lineHeight: "1.2" }}
              >
                G.T.M.
                <br />
                CHEMICALS
              </span>
            </Link>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              Quality Chemistry.<br />Tailor-made Solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white text-base font-bold uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-base font-bold uppercase tracking-widest mb-4">Contact</p>
            <div className="text-white/65 text-sm mb-5 space-y-1.5">
              <a href="tel:+66614134322" className="hover:text-white transition-colors duration-200 block">
                Khun Ple: +66-61-413-4322 (Phone/Line)
              </a>
              <a href="tel:+66988540410" className="hover:text-white transition-colors duration-200 block">
                Khun Varun: +66-98-854-0410 (Phone/WhatsApp/Line)
              </a>
              <a href="tel:+6622041645" className="hover:text-white transition-colors duration-200 block">
                Office: +66-2-204-1645
              </a>
              <p>Fax: +66-2-261-0874</p>
              <a href="mailto:varun@newbell.net" className="hover:text-white transition-colors duration-200 block">
                Email: varun@newbell.net
              </a>
              <a href="mailto:customerservices@newbell.net" className="hover:text-white transition-colors duration-200 block">
                Email: customerservices@newbell.net
              </a>
            </div>
            <div className="flex items-center gap-3">
              {/* LINE */}
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE"
                className="w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Image src="/LINE_logo.svg.png" alt="LINE" width={32} height={32} className="object-contain" />
              </a>
              {/* Email */}
              <a
                href="mailto:customerservices@newbell.net"
                aria-label="Email"
                className="w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Image src="/Mail_icon.png" alt="Email" width={32} height={32} className="object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/35 text-sm text-center">
            Copyright and Trademark of G.T.M. Chemicals Co. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
