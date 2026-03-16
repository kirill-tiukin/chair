"use client";

import { useState, useEffect } from "react";
import { VOTE_URL } from "@/lib/data";

const links = [
  { href: "#vision", label: "Vision" },
  { href: "#why", label: "Why Me" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-syne font-extrabold text-sm tracking-widest uppercase text-accent"
        >
          Kirill Tiukin
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium text-muted hover:text-accent transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="#cta"
              onClick={(e) => { e.preventDefault(); handleNav("#cta"); }}
              className="text-sm font-semibold text-white bg-accent px-5 py-2 rounded-full hover:bg-accent-mid transition-all duration-200 shadow-[0_2px_12px_rgba(74,53,168,0.3)]"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bottom-0 overflow-y-auto transition-all duration-300 bg-white ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-5 py-4 gap-1 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="w-full text-left text-sm font-medium text-muted hover:text-accent py-3 border-b border-border last:border-0 transition-colors bg-transparent border-x-0 border-t-0 cursor-pointer"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <a
              https://www.thesubath.com/elections/ballot/1934/55175/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-sm font-bold text-white btn-vote-grad py-3 rounded-full shadow-[0_4px_20px_rgba(212,168,67,0.3)]"
            >
              🗳 Vote for Kirill
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
