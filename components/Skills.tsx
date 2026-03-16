"use client";

import { skills } from "@/lib/data";
import { useReveal } from "./useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="bg-bg py-20 px-5 sm:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <span className="reveal block text-xs font-bold tracking-[0.12em] uppercase text-accent-mid mb-4">
          Capabilities
        </span>
        <h2
          className="reveal font-syne font-bold text-accent tracking-tight leading-[1.1] mb-12"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          A well-rounded<br className="hidden sm:block" /> skill set.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((block, i) => (
            <div
              key={block.title}
              className={`reveal${i > 0 ? ` d${i}` : ""} bg-surface border border-border rounded-[22px] p-7 hover:shadow-[0_8px_30px_rgba(74,53,168,0.1)] hover:border-border-strong transition-all duration-200`}
            >
              <p className="font-syne font-bold text-accent text-sm tracking-wide mb-4">
                {block.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {block.pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-xs text-muted border border-border bg-bg rounded-full px-3 py-1 hover:border-accent-mid hover:text-accent-mid transition-colors duration-150 cursor-default"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
