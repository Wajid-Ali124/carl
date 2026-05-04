"use client";

import { useState } from "react";
import { m, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Do I need to be an attorney to work with Carl?",
    answer: "No. While Carl specializes in serving attorneys, public defenders, law students, and legal executives, the Courage2Connect™ Coaching programs are equally powerful for any executive, organizational leader, or high-performing professional navigating the intersection of leadership, identity, and purpose. If the work resonates — you belong here."
  },
  {
    question: "What makes Carl's coaching different from traditional executive coaching?",
    answer: "Most executive coaching focuses on strategy, productivity, and performance metrics. Carl's work goes deeper. His Mr. Vulnerability℠ framework addresses the internal architecture of leadership — the beliefs, fears, and blind spots that no amount of strategy can fix. He brings 25+ years of lived multi-sector leadership experience, an active JD candidacy, and a personal story of transformation that creates a coaching relationship built on genuine credibility rather than theory."
  },
  {
    question: "How long is a typical coaching engagement?",
    answer: "Each program varies in length and intensity. The Courage Spark™ is designed as a focused foundational engagement. Legal Minds Elevated™ is a deeper mid-term commitment. The Executive Leadership Intensive™ is Carl's most comprehensive offering and is scoped individually based on your goals and organizational context. A discovery call is the best way to determine which program and timeline is right for you."
  },
  {
    question: "Is coaching conducted in-person or virtually?",
    answer: "Carl serves clients across the Greater Philadelphia region in person and works with legal professionals nationally via virtual engagement. Both formats are available across all three programs."
  },
  {
    question: "What can I expect in a discovery call?",
    answer: "A discovery call is a no-obligation, 30-minute conversation with Carl directly. There is no sales pitch. Carl will ask about where you are, where you want to go, and what has gotten in the way. By the end of the call, you will know whether Courage2Connect™ Coaching is the right fit — and so will Carl. He only takes on clients he is confident he can serve at the highest level."
  },
  {
    question: "Is what we discuss in coaching confidential?",
    answer: "Absolutely. Every coaching engagement operates under strict confidentiality. What is said in coaching stays in coaching — always. Carl understands the particular sensitivity of the legal environment and treats every client relationship with the discretion and professionalism that environment demands."
  }
];

export default function CourageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema Markup for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="bg-white py-[100px] md:py-[140px] overflow-hidden">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container">
        
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-bg-dark text-center mb-[60px] md:mb-[80px]"
        >
          Your Questions, Answered.
        </m.h2>

        <div className="max-w-[760px] mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-black/10 py-[28px] first:border-t">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-body text-[16px] md:text-[17px] font-medium transition-colors duration-200 ${isOpen ? 'text-accent' : 'text-bg-dark group-hover:text-accent'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus/Cross Animated Icon Toggle */}
                  <div className="flex-shrink-0 ml-[24px] relative w-[20px] h-[20px] flex items-center justify-center">
                    <span className={`absolute w-[16px] h-[2px] bg-accent transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    <span className={`absolute w-[2px] h-[16px] bg-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-[15px] md:text-[16px] text-bg-dark/75 leading-[1.8] font-light pt-[20px] pb-[8px]">
                        {faq.answer}
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
