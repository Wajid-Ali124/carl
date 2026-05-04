"use client";

import Link from "next/link";
import { m, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0.5 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function NotFoundClient() {
  return (
    <div className="relative min-h-[85vh] w-full bg-bg-dark flex items-center justify-center overflow-hidden pt-[110px] pb-[80px]">
      {/* Giant faint background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[50vw] font-bold text-white/[0.015] leading-none tracking-tighter">
          404
        </span>
      </div>

      <div className="container relative z-10">
        <m.div
          className="flex flex-col items-center text-center max-w-[640px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <m.div variants={lineVariants} className="w-[40px] h-[1px] bg-accent mb-[30px]" />
          
          <m.h1 
            variants={itemVariants}
            className="font-display text-[clamp(40px,5vw,56px)] leading-[1.15] text-white tracking-[0.02em] mb-[24px]"
          >
            Page Not Found
          </m.h1>
          
          <m.p 
            variants={itemVariants}
            className="font-body text-[16px] md:text-[18px] leading-[1.8] text-text-inverse-muted/70 font-light mb-[48px]"
          >
            Even the most solid foundations sometimes lead to unexpected places. 
            The page you are looking for has been moved or no longer exists.
          </m.p>
          
          <m.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link
              href="/"
              className="inline-block border border-accent text-accent bg-transparent font-body text-[12px] font-medium tracking-[0.14em] uppercase px-[40px] py-[16px] rounded-[2px] transition-all duration-300 hover:bg-accent hover:text-bg-dark text-center w-full sm:w-auto"
            >
              Return Home
            </Link>
          </m.div>
        </m.div>
      </div>
    </div>
  );
}
