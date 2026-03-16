"use client";

import { VOTE_URL } from "@/lib/data";

export default function CTA() {
  return (
    <section id="cta" className="cta-grad py-20 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-bold tracking-[0.12em] uppercase text-white/50 mb-4">
          Let&apos;s connect
        </span>
        <h2
          className="font-syne font-bold text-white tracking-tight leading-[1.1] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          Ready to help Bath<br className="hidden sm:block" /> Finance Society grow.
        </h2>
        <p className="text-base text-white/65 font-light leading-[1.7] max-w-lg mb-10">
          Whether you want to discuss my candidacy, collaborate, or just talk
          finance — I&apos;m always open. Let&apos;s build something worth being part of.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.thesubath.com/resources/electionscommittee/"
            className="inline-flex items-center gap-2 px-8 py-4 btn-vote-grad text-white rounded-full text-base font-bold shadow-[0_4px_20px_rgba(212,168,67,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(212,168,67,0.5)] transition-all duration-200"
          >
            🗳 Vote for Kirill
          </a>
          <a
            href="mailto:tiukinwork@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white text-accent rounded-full text-sm font-bold shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-200"
          >
            ✉ tiukinwork@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/kirill-tiukin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-7 py-4 border-[1.5px] border-white/35 text-white rounded-full text-sm font-medium hover:border-white hover:bg-white/8 transition-all duration-200"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
