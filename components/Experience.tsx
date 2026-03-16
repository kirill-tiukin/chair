"use client";

import { experience } from "@/lib/data";
import { useReveal } from "./useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="bg-surface py-20 px-5 sm:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <span className="reveal block text-xs font-bold tracking-[0.12em] uppercase text-accent-mid mb-4">
          Background
        </span>
        <h2
          className="reveal font-syne font-bold text-accent tracking-tight leading-[1.1] mb-12"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          Experience that<br className="hidden sm:block" /> speaks for itself.
        </h2>

        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <div
              key={exp.role}
              className={`reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""} grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 items-start py-8 border-b border-border last:border-0`}
            >
              <span className="text-xs text-faint font-medium sm:pt-0.5">{exp.date}</span>
              <div>
                <p className="font-syne font-bold text-accent text-base mb-0.5">{exp.role}</p>
                <p className="text-sm font-semibold text-teal mb-3">{exp.org}</p>
                <ul className="flex flex-col gap-1.5">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-muted pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-border-strong before:text-xs"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
