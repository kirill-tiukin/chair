"use client";

import { stats } from "@/lib/data";
import { useReveal } from "./useReveal";

export default function StatsStrip() {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="border-y border-border bg-surface"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.num}
            className={`reveal${i > 0 ? ` d${i}` : ""} flex flex-col gap-1 px-4 py-6 border-border ${
              i < stats.length - 1 ? "border-r" : ""
            } ${i === 1 ? "border-r-0 md:border-r" : ""} hover:bg-accent-light transition-colors duration-200`}
          >
            <span className="stat-num font-syne font-extrabold text-[1.9rem] leading-none tracking-[-0.04em]">
              {s.num}
            </span>
            <span className="text-xs text-muted font-normal">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
