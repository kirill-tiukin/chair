"use client";

import { whyItems, profileTags } from "@/lib/data";
import { useReveal } from "./useReveal";

const tagStyles = {
  accent: "bg-accent-light text-accent-mid font-semibold",
  gold: "bg-gold-light text-[#a07820] font-semibold",
  default: "bg-[#f0edf8] text-muted",
};

export default function WhyMe() {
  const ref = useReveal();

  return (
    <section id="why" className="bg-bg py-20 px-5 sm:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <span className="reveal block text-xs font-bold tracking-[0.12em] uppercase text-accent-mid mb-4">
          Why Kirill
        </span>
        <h2
          className="reveal font-syne font-bold text-accent tracking-tight leading-[1.1] mb-12"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          The case for<br className="hidden sm:block" /> my candidacy.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">
          {/* Profile card */}
          <div className="reveal lg:sticky lg:top-20">
            <div className="bg-surface border border-border rounded-[22px] overflow-hidden shadow-[0_4px_24px_rgba(45,31,110,0.07)]">
              <div className="relative">
                <div className="profile-banner-grad h-20" />
                <div className="avatar-grad absolute bottom-0 translate-y-1/2 left-6 w-16 h-16 rounded-full border-[3px] border-surface flex items-center justify-center font-syne font-extrabold text-[1.3rem] text-white shadow-lg">
                  KT
                </div>
              </div>
              <div className="pt-10 px-6 pb-6">
                <p className="font-syne font-bold text-accent text-[1.05rem] mb-0.5">
                  Kirill Tiukin
                </p>
                <p className="text-xs text-muted mb-5">
                  BSc Accounting &amp; Finance · Year 1
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {profileTags.map((t) => (
                    <span
                      key={t.label}
                      className={`text-xs px-3 py-1 rounded-full ${tagStyles[t.variant]}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why items */}
          <div className="flex flex-col gap-4">
            {whyItems.map((item, i) => (
              <div
                key={item.num}
                className={`reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""} group flex gap-5 items-start bg-surface border border-border rounded-[14px] p-6 hover:border-accent-mid hover:translate-x-1 hover:shadow-[0_4px_20px_rgba(74,53,168,0.12)] transition-all duration-200`}
              >
                <span className="font-syne font-extrabold text-[1.4rem] text-border-strong leading-none min-w-[2rem]">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-syne font-bold text-accent text-base mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-[1.65]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
