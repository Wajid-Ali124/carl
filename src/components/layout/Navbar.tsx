"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Courage2Connect™ Coaching", href: "/services/courage2connect" },
      { label: "Authentic Advocate Consulting™", href: "/services/authentic-advocate" },
      { label: "Speaking Engagements", href: "/speaking" },
    ],
  },
  {
    label: "Booking",
    href: "/booking",
    dropdown: [
      { label: "Book an Event or Workshop", href: "/booking/event" },
      { label: "Schedule a Discovery Call", href: "/booking/discovery" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-400 ${
        scrolled
          ? "bg-bg-dark shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container h-[90px] md:h-[110px] flex items-center justify-between">
        <Link
          href="/"
          className="relative flex items-center h-[60px] md:h-[85px] group"
        >
          <Image
            src="/assets/logo.png"
            alt="Carl Shawn Watkins Logo"
            width={300}
            height={300}
            className="object-contain w-auto h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className={`relative font-body text-[13px] tracking-[0.1em] uppercase transition-colors duration-250 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                  pathname === item.href ? "text-accent after:w-full font-medium" : "text-white/65 hover:text-white after:w-0 font-normal"
                }`}
              >
                {item.label} {item.dropdown && "▾"}
              </Link>
              
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-4 min-w-[240px] bg-[#0D2654] border border-accent/20 rounded-[2px] py-2 shadow-2xl opacity-0 invisible translate-y-2.5 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  {item.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.label}
                      href={dropItem.href}
                      className="block px-4 py-2 font-body text-[12px] tracking-[0.05em] text-white/65 hover:text-white hover:bg-white/5 transition-colors duration-200"
                    >
                      {dropItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/booking/discovery"
            className="inline-block border border-accent text-accent bg-transparent font-body text-[12px] font-medium tracking-[0.12em] uppercase px-[28px] py-[11px] rounded-[2px] transition-all duration-300 hover:bg-accent hover:text-bg-dark"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          className="lg:hidden w-8 h-8 flex flex-col items-end justify-center gap-[6px] z-[60] relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
        </button>

        {/* Backdrop for mobile menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-[40] ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-[80vw] max-w-[360px] bg-bg-dark border-l border-accent/20 flex flex-col justify-between pt-24 pb-12 px-8 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] z-[50] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 overflow-y-auto no-scrollbar">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={`w-full flex items-center justify-between font-display text-[28px] leading-[2.0] transition-colors ${
                      pathname === item.href || openDropdown === item.label ? "text-accent" : "text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180 text-accent" : "text-white/40"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`block font-display text-[28px] leading-[2.0] transition-colors ${
                      pathname === item.href ? "text-accent" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                
                {/* Mobile Dropdown items */}
                {item.dropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openDropdown === item.label ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-4 pl-5 border-l border-accent/20 ml-2 mt-2 mb-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                          className={`font-body text-[15px] ${
                            pathname === dropItem.href ? "text-accent" : "text-white/60 hover:text-white"
                          } transition-colors`}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Link
              href="/booking/discovery"
              className="block w-full text-center border border-accent text-accent font-body text-[12px] font-medium tracking-[0.12em] uppercase px-6 py-4 rounded-[2px]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
