"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Početna", href: "#hero" },
  { label: "O nama", href: "#about" },
  { label: "Usluge", href: "#services" },
  { label: "Galerija", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Praćenje skrola za dodavanje pozadine i sjene na navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blokiranje skrolovanja stranice dok je mobilni meni otvoren
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFBF5]/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brend */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-serif font-semibold tracking-wide text-[#2A2421] hover:text-[#C86D51] transition-colors"
          >
            Vintage Charm
          </Link>

          {/* Desktop navigacija */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#2A2421]/80 hover:text-[#C86D51] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-[#C86D51] text-white text-sm font-medium hover:bg-[#b05e45] transition-colors shadow-sm"
            >
              Rezervišite termin
            </a>
          </nav>

          {/* Mobilno animirano Hamburger / X dugme */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-50"
            aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={isOpen}
          >
            {/* Gornja linija */}
            <span
              className={`h-0.5 w-6 bg-[#2A2421] rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />

            {/* Srednja linija */}
            <span
              className={`h-0.5 w-6 bg-[#2A2421] rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0 -translate-x-2" : "opacity-100"
              }`}
            />

            {/* Donja linija */}
            <span
              className={`h-0.5 w-6 bg-[#2A2421] rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobilni Meni Overlay */}
      <div
        className={`fixed inset-0 top-0 left-0 w-full h-screen bg-[#FDFBF5] flex flex-col justify-center items-center px-6 transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
        style={{ zIndex: 40 }}
      >
        <nav className="flex flex-col items-center gap-6 text-center">
          {navItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`text-2xl font-serif text-[#2A2421] hover:text-[#C86D51] transition-all transform duration-300 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${isOpen ? idx * 50 + 100 : 0}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className={`mt-4 px-8 py-3 rounded-full bg-[#C86D51] text-white text-base font-medium shadow-md transition-all duration-300 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${isOpen ? 350 : 0}ms` }}
          >
            Rezervišite termin
          </a>
        </nav>
      </div>
    </header>
  );
}