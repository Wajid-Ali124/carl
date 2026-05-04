"use client";

import { m, type Variants } from "motion/react";
import Link from "next/link";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const brandCardVariants: Variants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -60 : 60,
    rotateY: direction === "left" ? -8 : 8
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function AboutBrands() {
  return (
    <section className="bg-bg-primary py-[80px] md:py-[120px] overflow-hidden">
      <div className="container">
        
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-[800px] mx-auto mb-[60px] md:mb-[80px]"
        >
          <m.h2 
            variants={headerVariants}
            className="font-display text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[0.02em] text-bg-dark mb-6 font-medium"
          >
            Two Platforms. One Mission. Zero Compromise.
          </m.h2>
          <m.p 
            variants={headerVariants}
            className="font-body text-[16px] md:text-[18px] leading-[1.8] text-bg-dark/80 font-light"
          >
            Carl's work operates through two distinct but deeply connected brands, each designed to serve a specific dimension of leadership transformation in law.
          </m.p>
        </m.div>

        {/* The perspective property is required on the parent grid to enable the 3D rotateY effect on the children */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 [perspective:1000px]">
          
          {/* Brand 1: Courage2Connect */}
          <m.div
            custom="left"
            variants={brandCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(201,168,76,0.15)" }}
            transition={{ duration: 0.3 }}
            className="bg-bg-dark border border-accent/20 rounded-[2px] p-8 md:p-14 flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="font-display text-[clamp(28px,3vw,36px)] text-accent mb-6 leading-[1.2] tracking-[0.02em]">
                Courage2Connect™ Coaching
              </h3>
              <div className="font-body text-[15px] md:text-[17px] leading-[1.8] text-white/80 font-light flex flex-col gap-4">
                <p>
                  Built for individual legal professionals — attorneys, public defenders, law students, and emerging leaders — who are done performing and ready to lead from a place of genuine strength.
                </p>
                <p>
                  Courage2Connect™ is the personal transformation arm of Carl's work. It addresses the internal barriers — fear of judgment, self-limiting beliefs, emotional disconnection — that keep talented legal professionals from becoming the leaders they are fully capable of being.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link
                href="/services/courage2connect"
                className="relative inline-block font-body text-[13px] tracking-[0.1em] uppercase text-accent font-medium pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                Explore Personal Coaching →
              </Link>
            </div>
          </m.div>

          {/* Brand 2: Consulting */}
          <m.div
            custom="right"
            variants={brandCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(201,168,76,0.15)" }}
            transition={{ duration: 0.3 }}
            className="bg-bg-dark border border-accent/20 rounded-[2px] p-8 md:p-14 flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="font-display text-[clamp(28px,3vw,36px)] text-accent mb-6 leading-[1.2] tracking-[0.02em]">
                Carl Shawn Watkins Consulting™
              </h3>
              <div className="font-body text-[15px] md:text-[17px] leading-[1.8] text-white/80 font-light flex flex-col gap-4">
                <p>
                  Built for law firms, legal organizations, managing partners, and institutional leaders who recognize that their greatest competitive advantage is not strategy — it is culture.
                </p>
                <p>
                  This consulting brand delivers leadership culture assessments, associate development programs, managing partner advisory, DEI integration, and organizational workshops that move firms from performance-based fear to purpose-based excellence.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link
                href="/services/authentic-advocate"
                className="relative inline-block font-body text-[13px] tracking-[0.1em] uppercase text-accent font-medium pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                Explore Firm Consulting →
              </Link>
            </div>
          </m.div>

        </div>

        {/* Final wrapping paragraph */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-[60px] md:mt-[80px] text-center max-w-[800px] mx-auto"
        >
          <m.p 
            variants={headerVariants}
            className="font-display italic text-[clamp(22px,2vw,28px)] leading-[1.5] text-bg-dark font-medium"
          >
            "Together, these two brands cover every stage of the leadership journey — from the individual attorney finding their voice to the law firm redefining its culture from the inside out."
          </m.p>
        </m.div>

      </div>
    </section>
  );
}
