"use client";

import { m, useInView, type Variants } from "motion/react";
import { useState, useEffect, useRef } from "react";

const statVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" }
  })
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const CountUp = ({ target, prefix = "", suffix = "" }: { target: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1800;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        
        // easeOutQuart curve for smooth fast-to-slow deceleration
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * target));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const statsData = [
  { target: 25, suffix: "+", label: "Years of multi-sector leadership experience" },
  { target: 1000, suffix: "+", label: "Leaders trained across public and private sectors" },
  { target: 200, suffix: "+", label: "Senior executives coached" },
  { target: 38, suffix: "", label: "LinkedIn recommendations from legal and executive professionals" }
];

export default function AboutSocialProof() {
  return (
    <section className="bg-bg-dark text-white py-[80px] md:py-[120px] overflow-hidden">
      <div className="container">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-[60px] md:mb-[80px]"
        >
          <m.h2 
            variants={headerVariants}
            className="font-display text-[clamp(32px,4vw,48px)] font-medium text-white mb-6 tracking-[0.02em]"
          >
            The Numbers Behind the Mission
          </m.h2>
          <m.p 
            variants={headerVariants}
            className="font-body text-[16px] md:text-[18px] leading-[1.8] text-text-inverse-muted/80 max-w-[800px] mx-auto font-light"
          >
            Trusted by attorneys, managing partners, public defenders, law students, and C-suite executives across the Greater Philadelphia region and beyond.
          </m.p>
        </m.div>
        
        {/* CSS Grid hack to create perfect 1px borders via gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-accent/20 border-t border-b border-accent/20">
          {statsData.map((stat, i) => (
            <div key={i} className="bg-bg-dark flex flex-col items-center text-center justify-center">
              <m.div 
                custom={i} 
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="py-[50px] px-8 flex flex-col items-center text-center w-full h-full"
              >
                <div className="font-display text-[clamp(44px,4vw,56px)] font-medium text-accent leading-none mb-4 tracking-[0.02em]">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="font-body text-[14px] leading-[1.6] text-white/80 max-w-[220px]">
                  {stat.label}
                </div>
              </m.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
