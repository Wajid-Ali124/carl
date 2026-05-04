"use client";

import { m, type Variants } from "motion/react";
import Link from "next/link";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Variants for the ROI pillars
const pillarVariants: Variants = {
  hidden: { height: "0%" },
  visible: (i: number) => ({
    height: `${40 + (i * 15)}%`, // Ascending heights: 40%, 55%, 70%, 85%, 100%
    transition: {
      delay: 0.6 + (i * 0.15),
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function CourageHero() {
  return (
    <section className="relative min-h-[100svh] w-full bg-bg-dark flex items-center pt-[140px] pb-[100px] lg:pt-[180px] lg:pb-[120px] overflow-hidden">
      
      {/* Background Subtleties */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[40px] items-center min-h-[80vh]">
          
          {/* Left - ROI Focused Copy */}
          <div className="flex flex-col justify-center order-1 pt-[20px] lg:pt-[40px]">
            
            <m.div 
              custom={1} variants={textVariants} initial="hidden" animate="visible"
              className="flex items-center gap-[12px] mb-[32px]"
            >
              <div className="h-[2px] w-[30px] bg-accent" />
              <span className="font-body text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">
                Courage2Connect™ Coaching
              </span>
            </m.div>

            <m.h1 
              custom={2} variants={textVariants} initial="hidden" animate="visible"
              className="font-display text-[clamp(40px,5vw,68px)] font-medium text-white leading-[1.1] tracking-[0.01em] mb-[32px]"
            >
              The Legal Profession Doesn't Need More Performers. <br />
              <span className="italic text-accent block mt-2">It Needs More Leaders.</span>
            </m.h1>

            <m.p 
              custom={3} variants={textVariants} initial="hidden" animate="visible"
              className="font-body text-[16px] md:text-[17px] text-text-inverse-muted leading-[1.8] max-w-[540px] mb-[48px] font-light"
            >
              You passed the bar. You built the career. But somewhere between the briefs and the billable hours, the real you — the leader you came here to be — got buried. Courage2Connect™ Coaching exists to bring that leader back to the surface.
            </m.p>

            <m.div custom={4} variants={textVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row sm:items-center gap-6">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group inline-flex items-center justify-center gap-[10px] font-body text-[12px] font-medium tracking-[0.16em] uppercase text-bg-dark bg-accent px-[40px] py-[18px] rounded-[2px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
              >
                Explore the Programs
                <span className="group-hover:translate-y-[4px] transition-transform duration-300 text-[14px]">↓</span>
              </button>
              
              {/* Hard ROI Data Label */}
              <div className="hidden sm:flex flex-col border-l border-white/10 pl-6 ml-2">
                <span className="font-display text-[26px] text-white leading-none">1,000+</span>
                <span className="font-body text-[10px] uppercase tracking-[0.1em] text-accent mt-2">Leaders Transformed</span>
              </div>
            </m.div>

          </div>

          <div className="relative h-[250px] sm:h-[350px] lg:h-[500px] w-full flex items-end justify-center gap-[12px] md:gap-[20px] order-2 pl-0 lg:pl-[60px] overflow-hidden lg:overflow-visible">
            
            {/* The Ascending Pillars (Bar Chart Metaphor) */}
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="relative w-[18%] md:w-[60px] h-full flex items-end group">
                {/* Background Track */}
                <div className="absolute inset-0 bg-white/[0.02] border border-white/[0.05]" />
                
                {/* Animated Ascending Pillar */}
                <m.div
                  custom={i}
                  variants={pillarVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full relative bg-gradient-to-t from-accent/5 to-accent/60 border-t-2 border-accent shadow-[0_0_20px_rgba(201,168,76,0.1)]"
                >
                  {/* Glass Top Edge */}
                  <div className="absolute top-0 left-0 w-full h-[30px] bg-gradient-to-b from-white/20 to-transparent" />
                </m.div>
                
                {/* Floating momentum particles rising from pillars */}
                <m.div 
                  animate={{ y: [0, -150], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.5 + i, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[30px] bg-accent/40 blur-[1px]"
                />
              </div>
            ))}

            {/* Diagonal Momentum / Trend Line slicing across the graph */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <m.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[-10%] bottom-[25%] w-[120%] h-[2px] bg-accent/60 origin-left -rotate-[18deg] blur-[2px]"
              />
              <m.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[-10%] bottom-[25%] w-[120%] h-[1px] bg-white origin-left -rotate-[18deg]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
