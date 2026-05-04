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
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const testimonials = [
  {
    quote: "Carl doesn't coach from a textbook. He coaches from a place of lived understanding. What changed for me was not my strategy — it was my relationship with my own leadership. That shift changed everything else.",
    name: "Marcus T.",
    title: "Senior Associate, Philadelphia-based Litigation Firm"
  },
  {
    quote: "I came in skeptical. I'm an attorney — I interrogate everything. What I found in Carl was someone who had done the internal work himself. That authenticity is what made me trust the process.",
    name: "Diane R.",
    title: "Public Defender, Greater Philadelphia Region"
  },
  {
    quote: "The Executive Leadership Intensive was the most significant professional investment I have made in twenty years of practice. Not because of what I learned — but because of who I became on the other side of it.",
    name: "James W.",
    title: "Managing Partner, Corporate Law Practice"
  }
];

export default function CourageTestimonials() {
  return (
    <section className="bg-bg-primary py-[100px] md:py-[140px] overflow-hidden">
      <div className="container max-w-[1200px]">
        
        {/* Header Section */}
        <m.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-[60px] md:mb-[80px]"
        >
          <h3 className="font-body text-[11px] md:text-[12px] font-medium tracking-[0.16em] uppercase text-accent mb-[16px]">
            WHAT LEADERS ARE SAYING
          </h3>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-bg-dark tracking-[0.01em]">
            Heard from the People Who Showed Up.
          </h2>
        </m.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
          {testimonials.map((item, i) => (
            <m.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white pt-[44px] pb-[36px] px-[36px] border border-black/[0.06] border-t-[3px] border-t-accent rounded-[2px] relative flex flex-col justify-between"
            >
              {/* Decorative Quote Mark */}
              <div className="font-display text-[80px] text-accent opacity-20 absolute top-[16px] left-[28px] select-none pointer-events-none leading-[1]">
                “
              </div>
              
              <p className="font-display text-[17px] md:text-[18px] italic text-bg-dark leading-[1.7] mb-[32px] relative z-10">
                "{item.quote}"
              </p>
              
              <div className="flex flex-col relative z-10">
                <span className="font-body text-[13px] font-medium text-bg-dark tracking-[0.06em]">
                  {item.name}
                </span>
                <span className="font-body text-[12px] text-bg-dark/50 mt-[4px] leading-[1.5]">
                  {item.title}
                </span>
              </div>
            </m.div>
          ))}
        </div>

      </div>
    </section>
  );
}
