"use client";

import { m, type Variants } from "motion/react";

const leftVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const rightHeaderVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
  }
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + (i * 0.08),
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const listItems = [
  "Attorney or public defender feeling the weight of leadership without the tools to carry it authentically",
  "Associate or senior partner navigating the gap between professional excellence and personal fulfillment",
  "Law student preparing to enter a profession that demands more than technical skill",
  "Legal executive or managing partner whose team is performing — but not thriving",
  "In-house counsel responsible for organizational culture and leadership outcomes",
  "Legal professional experiencing burnout, disconnection, or a quiet sense that something important has been lost",
  "Executive or C-suite leader in a law-adjacent organization seeking purpose-driven leadership development",
  "Anyone in the legal profession ready to stop leading from fear and start leading from strength"
];

export default function CourageWho() {
  return (
    <section id="programs" className="bg-bg-primary py-[100px] md:py-[140px] overflow-hidden">
      <div className="container max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-start">
          
          {/* Left - Statement */}
          <m.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:sticky lg:top-[160px]"
          >
            <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-medium italic text-bg-dark leading-[1.35] tracking-[0.01em]">
              "This coaching is for the attorney who has mastered the law — but hasn't yet <span className="underline decoration-accent decoration-[2px] underline-offset-[6px]">mastered leading with their whole self</span>."
            </h2>
          </m.div>

          {/* Right - List */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            <m.h3 
              variants={rightHeaderVariants}
              className="font-body text-[11px] md:text-[12px] font-medium tracking-[0.16em] uppercase text-accent mb-[36px]"
            >
              THIS IS FOR YOU IF YOU ARE A —
            </m.h3>

            <div className="flex flex-col gap-[20px]">
              {listItems.map((item, i) => (
                <m.div 
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  className="flex items-start gap-[14px]"
                >
                  {/* Gold dot marker */}
                  <div className="w-[6px] h-[6px] bg-accent rounded-full shrink-0 mt-[10px]" />
                  
                  <p className="font-body text-[15px] md:text-[16px] text-bg-dark/75 leading-[1.65] font-light">
                    {item}
                  </p>
                </m.div>
              ))}
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
