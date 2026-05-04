"use client";

import { m, type Variants } from "motion/react";

const lineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0.5 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const markVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutPullQuote() {
  const quoteText = "Lawyers who embrace vulnerability unlock their true potential as leaders, fostering authentic connections and creating an environment where innovation and trust can thrive.";
  const words = quoteText.split(" ");
  
  // Calculate delay so attribution fades in exactly after the final word settles
  const attributionDelay = words.length * 0.04 + 0.3;
  
  const attributionVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: attributionDelay, duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-bg-dark py-[100px] md:py-[160px] overflow-hidden">
      <div className="container relative">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center max-w-[900px] mx-auto relative"
        >
          {/* Top Gold Line */}
          <m.div variants={lineVariants} className="w-[80px] md:w-[120px] h-[1px] bg-accent mb-[50px] md:mb-[60px]" />
          
          {/* Oversized Decorative Quotation Mark */}
          <m.div 
            variants={markVariants}
            className="text-accent font-display text-[80px] md:text-[100px] leading-[0] mb-[30px] md:mb-[40px] mt-[20px]"
          >
            “
          </m.div>
          
          {/* Main Quote */}
          <h2 className="font-display italic text-[clamp(28px,4vw,44px)] leading-[1.4] text-white tracking-[0.02em] font-medium mb-[40px]">
            {words.map((word, i) => (
              <m.span
                key={i}
                custom={i}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </m.span>
            ))}
          </h2>
          
          {/* Attribution */}
          <m.div variants={attributionVariants} className="flex flex-col items-center gap-5">
            <span className="font-body text-[14px] md:text-[15px] uppercase tracking-[0.16em] font-medium text-accent">
              — Carl Shawn Watkins
            </span>
            
            <p className="font-body text-[13px] md:text-[14px] leading-[1.6] text-white/50 font-light max-w-[500px]">
              Verified by 38 LinkedIn recommendations. Trusted by legal professionals across the Greater Philadelphia region.
            </p>
          </m.div>

          {/* Bottom Gold Line */}
          <m.div variants={lineVariants} className="w-[80px] md:w-[120px] h-[1px] bg-accent mt-[50px] md:mt-[60px]" />

        </m.div>
      </div>
    </section>
  );
}
