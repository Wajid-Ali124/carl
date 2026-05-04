"use client";

import { m, type Variants } from "motion/react";

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
  }
};

const credentialItem: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + (i * 0.08), duration: 0.45, ease: "easeOut" }
  })
};

const CheckIcon = () => (
  <svg className="w-[22px] h-[22px] min-w-[22px] text-accent mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const credentials = [
  "Active JD candidate with deep understanding of the legal landscape, its pressures, and its culture",
  "25+ years leading across public sector, private sector, nonprofit, and corporate environments",
  "Subject matter expert in vulnerability-based leadership, emotional intelligence, and DEI strategy",
  "Recognized as \"Mr. Vulnerability℠\" — a trademarked approach to authentic, courage-first leadership",
  "Keynote speaker for law firms, bar associations, legal conferences, and executive retreats",
  "Remote Online Notary and active participant in the Greater Philadelphia legal community"
];

export default function AboutCredentials() {
  return (
    <section className="bg-white py-[80px] md:py-[120px] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Narrative */}
          <m.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="font-display text-[clamp(32px,4vw,48px)] leading-[1.15] text-bg-dark mb-8 tracking-[0.02em] font-medium">
              The Academic Pursuit That Matches the Mission
            </h2>
            
            <div className="flex flex-col gap-6 font-body text-[16px] md:text-[18px] leading-[1.8] text-bg-dark/80 font-light">
              <p>
                Carl holds a Bachelor of Arts in Law and is currently pursuing his Juris Doctor in Business and Corporate Law — not as a pivot, but as a deepening of a mission he has carried for over two decades.
              </p>
              
              <p>
                His research is grounded in a framework he developed through years of applied work across both public and private sectors:
              </p>

              <div className="my-2 p-6 md:p-8 bg-bg-primary border-l-[3px] border-accent">
                <span className="font-display text-[22px] md:text-[28px] font-medium text-bg-dark tracking-[0.02em] italic">
                  Diversity + Vulnerability = Inclusion™
                </span>
              </div>
              
              <p>
                This equation is not theoretical. It is the operating system behind every coaching engagement, every consulting retainer, and every keynote he delivers. It has been tested in courtrooms, law firm partner meetings, government offices, and Fortune 500 boardrooms. The results speak for themselves.
              </p>
              
              <p>
                Carl's academic credentials are paired with 25 years of lived leadership experience — the combination that separates a thought leader from a practitioner, and a practitioner from a true authority.
              </p>
            </div>
          </m.div>

          {/* Right Column: Credentials */}
          <m.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col lg:mt-4 p-8 md:p-10 bg-bg-primary/50 border border-black/5 rounded-[4px]"
          >
            <h3 className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-medium text-accent mb-10 leading-[1.6]">
              What makes Carl uniquely positioned to serve legal professionals:
            </h3>

            <div className="flex flex-col gap-6 md:gap-8">
              {credentials.map((cred, i) => (
                <m.div 
                  key={i}
                  custom={i}
                  variants={credentialItem}
                  className="flex items-start gap-4 md:gap-5"
                >
                  <CheckIcon />
                  <span className="font-body text-[16px] md:text-[17px] leading-[1.6] text-bg-dark/90 font-light">
                    {cred}
                  </span>
                </m.div>
              ))}
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
