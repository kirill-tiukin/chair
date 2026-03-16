"use client";

import { visionCards } from "@/lib/data";
import { useReveal } from "./useReveal";

export default function Vision() {
  const ref = useReveal();

  return (
    <section id="vision" className="bg-surface py-20 px-5 sm:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <span className="reveal block text-xs font-bold tracking-[0.12em] uppercase text-accent-mid mb-4">
          My Vision
        </span>
        <h2 className="reveal font-syne font-bold text-accent tracking-tight leading-[1.1] mb-4"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
          What I&apos;d bring<br className="hidden sm:block" /> to the table.
        </h2>
        <p className="reveal d1 text-base text-muted font-light leading-[1.7] max-w-lg mb-12">
          Bath Finance Society has the potential to be one of the most impactful
          student finance communities in the UK. Here&apos;s how I&apos;d help get it there
          as Vice Chair.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {visionCards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal${i > 0 && i < 3 ? ` d${i}` : ""} group rounded-[22px] border p-8 transition-all duration-300 ${
                card.featured
                  ? "sm:col-span-2 vision-featured border-transparent text-white"
                  : "bg-bg border-border hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(45,31,110,0.08)] hover:border-border-strong"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-5 ${
                  card.featured ? "bg-white/10" : "bg-accent-light"
                }`}
              >
                {card.icon}
              </div>
              <h3 className="font-syne font-bold text-[1.05rem] tracking-tight mb-2">
                {card.title}
              </h3>
              <p
                className={`text-sm leading-[1.65] ${
                  card.featured ? "text-white/70" : "text-muted"
                }`}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
