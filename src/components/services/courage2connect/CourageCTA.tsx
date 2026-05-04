"use client";

import { m, type Variants } from "motion/react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0.5 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function CourageCTA() {
  return (
    <section className="bg-bg-dark py-[120px] md:py-[160px] text-center overflow-hidden border-b border-white/5">
      <div className="container px-6 md:px-12">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center max-w-[800px] mx-auto"
        >
          {/* Gold rule */}
          <m.div
            variants={lineVariants}
            className="w-[40px] h-[1px] bg-accent mb-[40px]"
          />

          <m.h2
            variants={itemVariants}
            className="font-display text-[clamp(32px,5vw,60px)] font-light italic text-white leading-[1.2] tracking-[0.02em] mb-[28px]"
          >
            "The Courtroom Demands Courage. So Does the Mirror."
          </m.h2>

          <m.p
            variants={itemVariants}
            className="font-body text-[16px] md:text-[17px] text-text-inverse-muted leading-[1.8] max-w-[520px] mb-[48px] font-light"
          >
            The attorneys and executives who find Carl are not failing. They are succeeding — and quietly wondering whether success is supposed to feel this hollow. If that sentence landed, you already know what the next step is.
          </m.p>

          <m.div variants={itemVariants}>
            <Link
              href="/booking/discovery"
              className="inline-flex items-center gap-[12px] border border-accent text-accent bg-transparent font-body text-[12px] font-medium tracking-[0.14em] uppercase px-[44px] py-[16px] rounded-[2px] transition-all duration-300 hover:bg-accent hover:text-bg-dark mb-[32px] group"
            >
              Book Your Free Discovery Call
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </m.div>

          {/* Location & Contact Info */}
          <m.div variants={itemVariants} className="flex flex-col gap-[8px]">
            <p className="font-body text-[12px] text-[#B0B8C8]/40 tracking-[0.06em]">
              Serving legal professionals across Greater Philadelphia and nationally via virtual engagement.
            </p>
            <div className="flex items-center justify-center gap-[12px] font-body text-[12px] text-[#B0B8C8]/40 tracking-[0.06em]">
              <a href="mailto:carl@carlshawnwatkins.com" className="hover:text-[#B0B8C8]/80 transition-colors duration-200">carl@carlshawnwatkins.com</a>
              <span>·</span>
              <a href="tel:+18569742780" className="hover:text-[#B0B8C8]/80 transition-colors duration-200">(856) 974-2780</a>
            </div>
          </m.div>
          
        </m.div>
      </div>
    </section>
  );
}
