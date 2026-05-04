import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark py-[100px] md:py-[150px]">
      <div className="container max-w-[900px] mt-[40px]">
        
        <div className="mb-16 border-b border-white/10 pb-10">
          <h1 className="font-display text-[clamp(40px,5vw,64px)] text-white font-light tracking-[0.02em] leading-[1.1] mb-6">
            Project Demo <span className="text-accent italic">Directory</span>
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-white/60 font-light leading-[1.6] max-w-[600px]">
            This is a temporary landing page for the Carl Shawn Watkins Brand build. Select a developed page below to view the live implementation.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          
          {/* Page 2 Link */}
          <Link href="/about" className="group block bg-white/5 border border-white/10 p-8 md:p-12 rounded-[4px] hover:bg-white/10 hover:border-accent/40 transition-all duration-300">
            <h2 className="font-display text-[26px] md:text-[32px] text-accent mb-4 tracking-[0.02em] flex items-center justify-between">
              Page 2 — Inspirational Bio
              <span className="text-[20px] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </h2>
            <p className="font-body text-[15px] md:text-[16px] text-white/70 leading-[1.8] font-light">
              A full narrative bio written in your voice and your story. It opens with Chicago, moves through your academic credentials, introduces both brands, references your three books, and closes with a two-column credentials and expertise table. Pull quotes from The New Brief are woven throughout.
            </p>
          </Link>

          {/* Page 3 Link */}
          <Link href="/services/courage2connect" className="group block bg-white/5 border border-white/10 p-8 md:p-12 rounded-[4px] hover:bg-white/10 hover:border-accent/40 transition-all duration-300">
            <h2 className="font-display text-[26px] md:text-[32px] text-accent mb-4 tracking-[0.02em] flex items-center justify-between">
              Page 3 — Attorney & Exec Coaching
              <span className="text-[20px] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </h2>
            <p className="font-body text-[15px] md:text-[16px] text-white/70 leading-[1.8] font-light">
              Full description of Courage2Connect Coaching™ with all three programs laid out in a numbered service block format: The Courage Spark™, Legal Minds Elevated™, and the Executive Leadership Intensive. Includes who seeks this coaching in a bulleted list.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}
