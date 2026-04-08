import Link from "next/link";

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
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Navigation</p>
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
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Contact</p>
            <a
              href="mailto:customerservices@newbell.net"
              className="text-white/65 text-sm hover:text-white transition-colors duration-200 block mb-5"
            >
              customerservices@newbell.net
            </a>
            <div className="flex items-center gap-3">
              {/* LINE */}
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00AE38] hover:opacity-90 transition-opacity"
              >
                <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 4C12.954 4 4 12.059 4 22c0 8.837 7.022 16.218 16.5 17.69L20 44l5.5-4.5C36.954 38.218 44 31.119 44 22 44 12.059 35.046 4 24 4z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:customerservices@newbell.net"
                aria-label="Email"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:opacity-90 transition-opacity"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#EA4335" strokeWidth="1.5" fill="none"/>
                  <path d="M22 6l-10 7L2 6" stroke="#EA4335" strokeWidth="1.5"/>
                </svg>
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
