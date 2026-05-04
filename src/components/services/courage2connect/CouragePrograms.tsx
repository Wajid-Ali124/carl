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

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const programs = [
  {
    number: "01",
    name: "The Courage Spark™",
    tagline: "For the legal professional ready to find their footing and their voice.",
    description: [
      "You did not get this far by accident. But somewhere along the way, the pressure of the profession convinced you that vulnerability was a liability. The Courage Spark™ is the entry point — the coaching engagement designed to help you reconnect with who you actually are as a leader, beneath the titles, the suits, and the performance.",
      "This is a foundational coaching experience built for attorneys, law students, and legal professionals who are navigating transition, burnout, or the quiet realization that leading by fear is no longer working."
    ],
    included: [
      "One-on-one coaching sessions structured around your specific leadership challenges",
      "Carl's proprietary Vulnerability in Leadership™ framework applied to your real-world context",
      "Identifying and dismantling the self-limiting beliefs that are costing you cases, clients, and clarity",
      "Communication and presence work — how you show up in the room, the courtroom, and the boardroom",
      "A personal leadership roadmap you will carry forward long after the engagement ends"
    ],
    idealFor: "Attorneys in transition, law students entering the profession, legal professionals experiencing burnout or identity conflict"
  },
  {
    number: "02",
    name: "Legal Minds Elevated™",
    tagline: "For the established attorney ready to lead at the next level.",
    description: [
      "You have the credentials. You have the track record. What you need now is the internal architecture to match your external accomplishments. Legal Minds Elevated™ is a deeper, more intensive coaching engagement for practicing attorneys, senior associates, and legal professionals who are ready to close the gap between where they are and where they know they are capable of going.",
      "This program applies Carl's Diversity + Vulnerability = Inclusion™ framework to the real dynamics of legal practice — the client relationships, the team tensions, the partnership politics, and the personal toll of carrying other people's most difficult moments."
    ],
    included: [
      "In-depth leadership assessment to identify strengths, blind spots, and untapped capacity",
      "Emotional intelligence development designed specifically for the high-stakes legal environment",
      "Strategies for navigating difficult conversations — with clients, partners, opposing counsel, and yourself",
      "Authentic executive presence work — how to lead with authority without losing humanity",
      "Accountability structures and milestone mapping across the full engagement",
      "Access to Carl's network of legal and leadership professionals across the Greater Philadelphia region"
    ],
    idealFor: "Senior associates, practicing attorneys, public defenders, in-house counsel, legal professionals pursuing partnership"
  },
  {
    number: "03",
    name: "Executive Leadership Intensive™",
    tagline: "For the legal executive ready to transform not just themselves — but the culture around them.",
    description: [
      "This is Carl's most comprehensive coaching engagement. The Executive Leadership Intensive™ is built for managing partners, legal executives, and senior organizational leaders who understand that the highest leverage point for their firm is not strategy — it is leadership culture.",
      "Over the course of this intensive engagement, Carl works with you to architect a leadership identity that is sustainable, courageous, and capable of inspiring transformation in everyone around you. This is not performance coaching. This is legacy work."
    ],
    included: [
      "Full executive leadership assessment and 360-degree feedback integration",
      "Weekly one-on-one coaching sessions with Carl directly",
      "Carl's complete Mr. Vulnerability℠ framework applied at the executive level",
      "Culture and team leadership strategy — how to model the standard you want your firm to live by",
      "Public presence, keynote preparation, and thought leadership positioning",
      "Managing partner advisory support including difficult personnel, policy, and culture decisions",
      "Priority access and extended session availability throughout the engagement"
    ],
    idealFor: "Managing partners, legal executives, senior organizational leaders, C-suite executives in law-adjacent organizations"
  }
];

export default function CouragePrograms() {
  return (
    <section className="bg-white py-[100px] md:py-[140px] overflow-hidden">
      <div className="container max-w-[1200px]">
        
        {/* Header */}
        <m.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-[80px]"
        >
          <h3 className="font-body text-[11px] md:text-[12px] font-medium tracking-[0.16em] uppercase text-accent mb-[20px]">
            THE THREE PROGRAMS
          </h3>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-medium text-bg-dark tracking-[0.01em]">
            Courage2Connect™ Coaching Programs
          </h2>
        </m.div>

        {/* Programs List */}
        <div className="flex flex-col border-t border-black/10">
          {programs.map((program, idx) => (
            <m.div
              key={program.number}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className={`grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-[40px] lg:gap-[80px] p-[40px] md:p-[60px] lg:p-[80px] items-start border-b border-black/10 transition-colors ${idx % 2 !== 0 ? 'bg-bg-primary/40' : 'bg-transparent'}`}
            >
              
              {/* Left Column - Title & Number */}
              <div className="relative pt-[20px] lg:sticky lg:top-[140px]">
                {/* Decorative Faint Number */}
                <div className="font-display text-[120px] md:text-[140px] font-medium text-accent/15 leading-[0.8] select-none pointer-events-none absolute top-[-15px] left-[-5px]">
                  {program.number}
                </div>
                
                {/* Real Labels */}
                <div className="relative z-10">
                  <span className="block font-body text-[11px] font-semibold tracking-[0.16em] uppercase text-accent mb-[24px]">
                    Program {program.number}
                  </span>
                  <h3 className="font-display text-[clamp(28px,3vw,36px)] font-medium text-bg-dark leading-[1.15] mb-[20px]">
                    {program.name}
                  </h3>
                  <p className="font-body text-[15px] md:text-[16px] italic text-bg-dark/70 leading-[1.6]">
                    {program.tagline}
                  </p>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="flex flex-col">
                <div className="flex flex-col gap-[20px] mb-[48px]">
                  {program.description.map((p, i) => (
                    <p key={i} className="font-body text-[15px] md:text-[16px] text-bg-dark/85 leading-[1.8] font-light">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mb-[48px]">
                  <h4 className="font-body text-[11px] font-semibold tracking-[0.16em] uppercase text-accent mb-[24px]">
                    What's Included
                  </h4>
                  <ul className="flex flex-col gap-[14px]">
                    {program.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-[12px] font-body text-[15px] text-bg-dark/80 leading-[1.6] font-light">
                        <span className="text-accent font-medium mt-[1px]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-bg-dark p-[32px] md:p-[40px] rounded-[2px] border-l-[3px] border-accent shadow-sm">
                  <h4 className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase text-accent mb-[12px]">
                    Ideal For
                  </h4>
                  <p className="font-body text-[14px] md:text-[15px] text-white/90 leading-[1.6] font-light">
                    {program.idealFor}
                  </p>
                </div>
              </div>

            </m.div>
          ))}
        </div>

      </div>
    </section>
  );
}
