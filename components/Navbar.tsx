"use client";

import { useState } from "react";
import Image from "next/image";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Početna", id: "hero" },
  { label: "O nama", id: "about" },
  { label: "Galerija", id: "gallery" },
  { label: "Usluge", id: "services" },
  { label: "Utisci", id: "testimonials" },
  { label: "FAQ", id: "faq" },
  { label: "Kontakt", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FDFBF5]/95 backdrop-blur-md border-b border-[#E6D5B8]/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Naziv */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          >
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-[#C86D51]/30">
              <Image
                src="/logo.png"
                alt="Vintage Charm Logo"
                fill
                sizes="48px"
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#2A2421]">
                Vintage Charm
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#2A2421]/60 font-sans">
                Dekoracije
              </span>
            </div>
          </button>

          {/* Desktop navigacija */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-[#2A2421]/80 hover:text-[#C86D51] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 rounded-full bg-[#C86D51] text-white text-sm font-medium hover:bg-[#b05e45] transition-colors shadow-sm cursor-pointer"
            >
              Kontaktirajte nas
            </button>
          </nav>

          {/* Mobilno dugme sa animacijom Hamburger -> X */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-50 cursor-pointer"
            aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
          >
            <span
              className={`h-0.5 w-6 bg-[#2A2421] rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#2A2421] rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0 -translate-x-2" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#2A2421] rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobilni meni dropdown - Centrirane stavke */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF5] border-b border-[#E6D5B8]/60 px-6 pt-4 pb-8 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col items-center gap-3 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-center text-lg font-serif text-[#2A2421] hover:text-[#C86D51] py-2 px-4 rounded-md hover:bg-[#E6D5B8]/20 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-3 max-w-xs w-full py-3 rounded-full bg-[#C86D51] text-white text-sm font-medium hover:bg-[#b05e45] transition-colors shadow-sm cursor-pointer mx-auto"
            >
              Kontaktirajte nas
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}