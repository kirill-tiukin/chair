"use client";

import { VOTE_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-5 sm:px-8 pt-24 pb-20 max-w-6xl mx-auto">
      {/* Grid decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.035]" aria-hidden>
        <svg viewBox="0 0 1080 700" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2d1f6e" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-light border border-[#cfc8f0] rounded-full text-xs font-semibold text-accent-mid tracking-widest mb-8 opacity-0 animate-fade-up-delay-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-mid animate-pulse" />
          Candidate — Vice Chair, BFS
        </div>

        {/* Name */}
        <h1
          className="font-syne font-extrabold leading-[0.93] tracking-[-0.03em] mb-3 text-accent opacity-0 animate-fade-up-delay-2"
          style={{ fontSize: "clamp(3.2rem, 7vw, 6.5rem)" }}
        >
          Kirill
          <br />
          <span className="gradient-text">Tiukin.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-syne font-medium text-muted tracking-tight mb-8 opacity-0 animate-fade-up-delay-3"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
        >
          Finance. Data. Leadership.
        </p>

        {/* Description */}
        <p
          className="max-w-xl text-[1.05rem] text-muted font-light leading-[1.75] mb-10 opacity-0 animate-fade-up-delay-4"
        >
          A first-year BSc Accounting &amp; Finance student at the University of
          Bath with a track record of building real things — from a £15K revenue
          business to quantitative finance research. Ready to bring the same
          drive to Bath Finance Society.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12 opacity-0 animate-fade-up-delay-5">
          <a
            href="https://www.thesubath.com/elections/ballot/1934/55175/"
            className="inline-flex items-center gap-2 px-7 py-3.5 btn-vote-grad text-white rounded-full text-sm font-bold shadow-[0_4px_20px_rgba(212,168,67,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(212,168,67,0.45)] transition-all duration-200"
          >
            🗳 Vote for Kirill
          </a>
          <a
            href="https://linkedin.com/in/kirill-tiukin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 border-[1.5px] border-border-strong text-[#0e0c15] rounded-full text-sm font-medium hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Video */}
<div className="w-full max-w-3xl opacity-0 animate-fade-up-delay-6">
  <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-faint mb-3">
    <span className="inline-block w-5 h-px bg-border-strong" />
    My candidacy video
  </p>

  <div
    className="relative w-full rounded-2xl overflow-hidden border border-border shadow-[0_20px_70px_rgba(45,31,110,0.18)]"
    style={{ paddingTop: "56.25%" }}
  >
    <video
      src="/fin.mp4"
      controls
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
</div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-8 left-5 sm:left-8 flex items-center gap-3 text-xs text-faint font-medium tracking-[0.05em] uppercase opacity-0 animate-fade-up-delay-7">
      <span className="block w-8 h-px bg-border-strong" />
      Scroll to explore
    </div>
    </section>
  );
}
