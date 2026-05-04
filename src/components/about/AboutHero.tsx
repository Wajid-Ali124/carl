"use client";

import { m, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const ctaVariants: Variants = {
  rest: { scale: 1 },
  pulse: {
    scale: [1, 1.03, 1],
    transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }
  }
};

export default function AboutHero() {
  const h1Text = "From the Streets of Chicago to the Courtrooms of Change";
  const words = h1Text.split(" ");

  return (
    <section className="relative min-h-screen w-full bg-bg-dark flex items-center pt-[130px] pb-[60px] lg:pt-0 lg:pb-0 overflow-hidden">
      <div className="container relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 h-full min-h-screen">
          
          {/* Left Text (55%) */}
          <m.div 
            className="w-full lg:w-[55%] flex flex-col justify-center lg:pr-[80px] lg:pt-[100px]"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-display text-[clamp(40px,5vw,64px)] leading-[1.15] text-white tracking-[0.02em] mb-8">
              {words.map((word, i) => (
                <m.span
                  key={i}
                  className="inline-block mr-[0.25em] last:mr-0"
                  variants={itemVariants}
                >
                  {word}
                </m.span>
              ))}
            </h1>

            <m.p 
              variants={itemVariants}
              className="font-body text-[clamp(16px,1.5vw,18px)] leading-[1.8] text-text-inverse-muted/80 max-w-[500px] mb-12"
            >
              Leadership Coach for Lawyers. Keynote Speaker. Vulnerability Expert. JD Candidate. The man who turned adversity into a movement.
            </m.p>

            <m.div variants={itemVariants}>
              <m.div variants={ctaVariants} initial="rest" animate="pulse" className="inline-block rounded-[2px]">
                <Link
                  href="/booking/discovery"
                  className="inline-block border border-accent text-accent bg-transparent font-body text-[12px] font-medium tracking-[0.14em] uppercase px-[36px] py-[16px] rounded-[2px] transition-all duration-300 hover:bg-accent hover:text-bg-dark"
                >
                  Book a Consultation
                </Link>
              </m.div>
            </m.div>
          </m.div>

          {/* Right Image (45%) */}
          <m.div 
            className="w-full lg:w-[45%] h-[60vh] lg:h-screen relative mt-8 lg:mt-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute inset-0 w-full h-full lg:ml-8 overflow-hidden">
              {/* Fallback solid background */}
              <div className="absolute inset-0 bg-[#0D2654]" />
              
              <Image
                src="/assets/carl.webp"
                alt="Carl Shawn Watkins - Leadership Coach"
                fill
                className="object-cover object-top opacity-90 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              
              {/* Fade out the left edge of the image smoothly into the background on desktop */}
              <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-transparent to-transparent opacity-100 lg:w-[15%]" />
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
