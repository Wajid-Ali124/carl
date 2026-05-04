"use client";

import { m, type Variants } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const ctaSectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const buttonVariants: Variants = {
  rest: {
    boxShadow: "0 0 0px rgba(201,168,76,0)"
  },
  pulse: {
    boxShadow: [
      "0 0 0px rgba(201,168,76,0)",
      "0 0 24px rgba(201,168,76,0.45)",
      "0 0 0px rgba(201,168,76,0)"
    ],
    transition: {
      repeat: Infinity,
      duration: 2.5,
      ease: "easeInOut"
    }
  }
};

const tableData = [
  { left: "BA in Law", right: "Vulnerability in Leadership" },
  { left: "JD Candidate — Business & Corporate Law", right: "Emotional Intelligence for Legal Professionals" },
  { left: "25+ Years Multi-Sector Leadership", right: "DEI Strategy & Culture Transformation" },
  { left: "Founder — Courage2Connect™", right: "Attorney Leadership Coaching" },
  { left: "Founder — Carl Shawn Watkins Consulting™", right: "Executive & Managing Partner Advisory" },
  { left: "Keynote Speaker — Law Firms & Bar Associations", right: "Associate Development & Retention" },
  { left: "Mr. Vulnerability℠ — Trademarked Framework", right: "Fear-to-Purpose Leadership Transition" },
  { left: "Remote Online Notary", right: "Public Policy & Advocacy Leadership" },
  { left: "Greater Philadelphia Region", right: "Keynote Speaking & Workshop Facilitation" },
  { left: "Chicago Inner City — Foundation of Lived Leadership", right: "Courage2Connect™ Coaching Programs" },
];

export default function AboutExpertiseCTA() {
  return (
    <>
      {/* Table Section */}
      <section className="bg-white py-[80px] md:py-[140px] overflow-hidden">
        <div className="container max-w-[1000px]">
          <h2 className="font-display text-[clamp(32px,4vw,44px)] font-medium text-bg-dark text-center mb-[60px] tracking-[0.02em]">
            Credentials, Expertise & Areas of Impact
          </h2>

          <div className="w-full rounded-[4px] border border-black/10 overflow-hidden bg-white shadow-sm">
            {/* Headers */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-bg-primary border-b-[2px] border-accent">
              <div className="py-5 px-6 md:px-8 font-body text-[13px] md:text-[14px] uppercase tracking-[0.12em] font-semibold text-bg-dark">
                Credentials & Background
              </div>
              <div className="hidden md:block py-5 px-6 md:px-8 font-body text-[13px] md:text-[14px] uppercase tracking-[0.12em] font-semibold text-bg-dark border-l border-black/10">
                Areas of Expertise
              </div>
            </div>

            {/* Rows */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col"
            >
              {tableData.map((row, i) => (
                <m.div 
                  key={i}
                  custom={i}
                  variants={rowVariants}
                  className={`grid grid-cols-1 md:grid-cols-2 ${i % 2 === 0 ? "bg-white" : "bg-bg-primary/40"} border-b border-black/5 last:border-b-0 transition-colors hover:bg-bg-primary/60`}
                >
                  <div className="py-4 px-6 md:px-8 font-body text-[15px] leading-[1.6] text-bg-dark/80">
                    <span className="md:hidden font-semibold text-accent text-[11px] uppercase tracking-wider block mb-1">Background</span>
                    {row.left}
                  </div>
                  <div className="py-4 px-6 md:px-8 font-body text-[15px] leading-[1.6] text-bg-dark/80 border-t md:border-t-0 md:border-l border-black/5">
                    <span className="md:hidden font-semibold text-accent text-[11px] uppercase tracking-wider block mb-1">Expertise</span>
                    {row.right}
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg-dark py-[100px] md:py-[140px] relative overflow-hidden">
        <div className="container relative z-10">
          <m.div
            variants={ctaSectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-[1100px] mx-auto"
          >
            {/* Left Photo */}
            <div className="w-full lg:w-[45%]">
              <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-[#0A1A3A]" />
                <Image
                  src="/assets/carl-seated.webp"
                  alt="Carl Shawn Watkins - Trusted Advisor"
                  fill
                  className="object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 border border-white/10 rounded-[2px] pointer-events-none" />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3 className="font-display text-[clamp(40px,5vw,56px)] leading-[1.1] text-white tracking-[0.02em] font-medium mb-6">
                Ready to Lead Differently?
              </h3>
              
              <p className="font-body text-[16px] md:text-[20px] leading-[1.7] text-white/80 font-light mb-10 max-w-[600px]">
                If you are an attorney, managing partner, or legal professional who is tired of performing and ready to lead for real — this is where that journey begins.
              </p>

              <m.div variants={buttonVariants} initial="rest" animate="pulse" className="inline-block rounded-[2px] mb-10">
                <Link
                  href="/booking/discovery"
                  className="inline-block border border-accent text-accent bg-transparent font-body text-[13px] font-medium tracking-[0.14em] uppercase px-[48px] py-[20px] rounded-[2px] transition-all duration-300 hover:bg-accent hover:text-bg-dark"
                >
                  Book Your Free Consultation →
                </Link>
              </m.div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 lg:gap-5 w-full">
                <div className="hidden lg:block w-[40px] h-[1px] bg-accent mt-3" />
                <p className="font-body text-[12px] md:text-[13px] leading-[1.6] text-white/50 uppercase tracking-[0.1em] max-w-[400px]">
                  Serving attorneys, law firms, and legal organizations across the Greater Philadelphia region and nationally via virtual engagement.
                </p>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
