"use client";

import { m, type Variants } from "motion/react";

const lineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0.5 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const storyVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const quoteVariants: Variants = {
  hidden: { opacity: 0, x: -20, borderLeftWidth: 0 },
  visible: {
    opacity: 1,
    x: 0,
    borderLeftWidth: 3,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function AboutOriginStory() {
  return (
    <section className="bg-bg-primary text-text-primary py-[80px] md:py-[140px] overflow-hidden">
      <div className="container-narrow">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center md:text-left md:items-start"
        >
          {/* Subtle gold horizontal rule */}
          <m.div
            variants={lineVariants}
            className="w-[60px] h-[1px] bg-accent mb-[40px] md:mb-[60px] mx-auto md:mx-0"
          />

          <m.h2
            custom={0}
            variants={storyVariants}
            className="font-display text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-[0.02em] text-bg-dark mb-[40px] md:mb-[50px] font-medium"
          >
            Built by the City That Never Let Me Take the Easy Road
          </m.h2>

          <div className="flex flex-col gap-6 md:gap-8 font-body text-[clamp(16px,2vw,20px)] leading-[1.8] text-bg-dark/80 font-light">
            <m.p custom={1} variants={storyVariants}>
              I grew up in the inner city of Chicago, where the odds were stacked before you ever had a chance to play the game. Poverty was not an abstract concept. Disappointment was not a motivational metaphor. They were Tuesday.
            </m.p>

            <m.p custom={2} variants={storyVariants}>
              What that environment gave me — and what no credential can teach — is the ability to lead under real pressure. Not theoretical pressure. Not a Harvard Business School case study. The kind of pressure that tests whether you have a foundation or just a facade.
            </m.p>

            <m.p custom={3} variants={storyVariants}>
              I learned early that the leaders who last are not the ones who never fall. They are the ones who fall honestly, get up purposefully, and never pretend the fall did not happen. That is what vulnerability in leadership means to me. Not weakness. Not oversharing. Radical honesty in service of the people you are responsible for.
            </m.p>

            <m.p custom={4} variants={storyVariants}>
              That foundation is what I bring into every law firm, every boardroom, and every one-on-one coaching session. It cannot be faked. And attorneys — who spend their careers detecting exactly that — know the difference immediately.
            </m.p>
          </div>

          <m.div
            variants={quoteVariants}
            className="mt-[50px] md:mt-[70px] pl-[24px] md:pl-[32px] border-accent border-solid border-l-[3px] py-2 md:py-4 self-start text-left"
          >
            <p className="font-display italic font-medium text-[clamp(22px,3vw,30px)] leading-[1.4] text-bg-dark mb-5 max-w-[600px]">
              "A successful leader lays their foundation with the bricks others have thrown at them."
            </p>
            <span className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-medium text-accent">
              — Carl Shawn Watkins
            </span>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
