"use client";

import Link from "next/link";
import { m, type Variants } from "motion/react";

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const bottomBarVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 }
  }
};

export default function Footer() {
  return (
    <footer className="bg-bg-dark w-full overflow-hidden">
      {/* Zone 2 — Columns */}
      <m.div
        className="container py-[50px] md:py-[70px] grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-[60px] border-b border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Column 1 — Brand */}
        <m.div custom={0} variants={columnVariants} className="flex flex-col">
          <Link href="/" className="font-display text-[20px] tracking-[0.08em] text-white mb-4">
            Carl Shawn Watkins
          </Link>
          <p className="font-body text-[13px] text-text-inverse-muted/70 leading-[1.8] max-w-[260px] mb-7">
            Where emotional intelligence and courageous vulnerability meet — so legal professionals can build legacies that last.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              <a href="mailto:carl@carlshawnwatkins.com" className="font-body text-[13px] text-text-inverse-muted/60 hover:text-white transition-colors duration-200">
                carl@carlshawnwatkins.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              <a href="tel:+18569742780" className="font-body text-[13px] text-text-inverse-muted/60 hover:text-white transition-colors duration-200">
                (856) 974-2780
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              <span className="font-body text-[13px] text-text-inverse-muted/60">
                Greater Philadelphia Region
              </span>
            </div>
          </div>
        </m.div>

        {/* Column 2 — Navigate */}
        <m.div custom={1} variants={columnVariants} className="flex flex-col order-3 lg:order-none">
          <h4 className="font-body text-[10px] font-medium tracking-[0.16em] uppercase text-accent mb-6">
            Navigate
          </h4>
          <div className="flex flex-col gap-4 md:gap-3">
            {[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Speaking", href: "/speaking" },
              { label: "Resources", href: "/resources" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[14px] text-text-inverse-muted/60 hover:text-white transition-colors duration-200 block"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </m.div>

        {/* Column 3 — Connect */}
        <m.div custom={2} variants={columnVariants} className="flex flex-col order-4 lg:order-none">
          <h4 className="font-body text-[10px] font-medium tracking-[0.16em] uppercase text-accent mb-6">
            Connect
          </h4>
          <div className="flex flex-col gap-4 md:gap-3 mb-6">
            {[
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Facebook", href: "https://facebook.com" },
              { label: "Instagram", href: "https://instagram.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[14px] text-text-inverse-muted/60 hover:text-accent transition-colors duration-200 block"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link
            href="/booking/discovery"
            className="font-body text-[14px] text-text-inverse-muted/60 hover:text-white transition-colors duration-200 block"
          >
            Schedule a Discovery Call
          </Link>
        </m.div>
      </m.div>

      {/* Zone 3 — Bottom Bar */}
      <m.div
        className="container py-4 md:py-5 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={bottomBarVariants}
      >
        <p className="font-body text-[11px] text-text-inverse-muted/30 tracking-[0.04em]">
          © {new Date().getFullYear()} Carl Shawn Watkins Consulting™
        </p>
        <div className="flex gap-8">
          <Link href="/privacy" className="font-body text-[11px] text-text-inverse-muted/30 hover:text-text-inverse-muted/70 transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-body text-[11px] text-text-inverse-muted/30 hover:text-text-inverse-muted/70 transition-colors duration-200">
            Terms of Use
          </Link>
        </div>
      </m.div>
    </footer>
  );
}
