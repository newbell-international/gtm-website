"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "PRODUCTS & SERVICES", href: "/products" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0E1E4A]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
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

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-white font-light text-base lg:text-lg tracking-wide transition-opacity hover:opacity-80 ${
                  pathname === link.href ? "border-b-2 border-white pb-0.5" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact icons — desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* LINE icon */}
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LINE"
            className="w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Image src="/LINE_logo.svg.png" alt="LINE" width={32} height={32} className="object-contain" />
          </a>
          {/* Mail icon */}
          <a
            href="mailto:customerservices@newbell.net"
            aria-label="Email"
            className="w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Image src="/Mail_icon.png" alt="Email" width={32} height={32} className="object-contain" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#0E1E4A] border-t border-white/20 overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white font-light text-lg tracking-wide block"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex gap-3 pt-2">
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Image src="/LINE_logo.svg.png" alt="LINE" width={32} height={32} className="object-contain" />
            </a>
            <a
              href="mailto:customerservices@newbell.net"
              className="w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Image src="/Mail_icon.png" alt="Email" width={32} height={32} className="object-contain" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
