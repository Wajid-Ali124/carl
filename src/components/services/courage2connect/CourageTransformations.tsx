"use client";

import { m, type Variants } from "motion/react";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

const transformations = [
  { from: "Leading through performance and pressure", to: "Leading through presence and purpose" },
  { from: "Dreading difficult conversations", to: "Mastering them with clarity and confidence" },
  { from: "Feeling isolated at the top", to: "Building genuine trust with your team" },
  { from: "Burnout masquerading as dedication", to: "Sustainable energy rooted in meaning" },
  { from: "Avoiding vulnerability as weakness", to: "Wielding vulnerability as your greatest leadership tool" },
  { from: "Managing your image", to: "Building your legacy" }
];

export default function CourageTransformations() {
  return (
    <section className="bg-bg-dark py-[100px] md:py-[140px] overflow-hidden text-center">
      <div className="container">
        
        {/* Header Section */}
        <m.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-[60px] md:mb-[80px]"
        >
          <h2 className="font-display italic text-[clamp(30px,4vw,48px)] font-medium text-white mb-[24px] tracking-[0.02em]">
            "What Shifts When You Stop Leading from Fear"
          </h2>
          <p className="font-body text-[15px] md:text-[16px] text-text-inverse-muted leading-[1.75] max-w-[560px] mx-auto font-light">
            These are not promises. They are patterns — observed across 25 years and 1,000+ leaders in law, business, and public service.
          </p>
        </m.div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] max-w-[1000px] mx-auto text-left">
          {transformations.map((item, i) => (
            <m.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/[0.03] py-[36px] pr-[40px] pl-[24px] md:pl-[32px] border border-accent/10 border-l-[2px] border-l-accent hover:bg-white/[0.05] transition-colors duration-300"
            >
              <div className="flex flex-col gap-[12px]">
                <span className="font-body text-[11px] md:text-[12px] tracking-[0.14em] uppercase text-text-inverse-muted/70 font-medium">
                  {item.from}
                </span>
                <span className="font-display text-[20px] md:text-[22px] font-medium text-white leading-[1.4] tracking-[0.01em]">
                  {item.to}
                </span>
              </div>
            </m.div>
          ))}
        </div>

      </div>
    </section>
  );
}
