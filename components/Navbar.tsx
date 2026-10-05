"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Početna", href: "#hero" },
  { label: "O nama", href: "#o-nama" },
  { label: "Galerija", href: "#galerija" },
  { label: "Usluge & Paketi", href: "#usluge" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Praćenje skrola za transparentnu -> staklastu boho pozadinu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pouzdana navigacija za desktop i mobilne uređaje
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const id = targetId.replace("#", "");

      // Odmah zatvaramo mobilni meni ako je otvoren
      setIsMobileMenuOpen(false);

      setTimeout(() => {
        // Ako je kliknuto na "Početna" ili logo (#hero), skroluj na apsolutni vrh stranice
        if (id === "hero" || id === "pocetna" || id === "top") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          return;
        }

        // Za sve ostale sekcije proračunaj poziciju uzimajući u obzir visinu navbara
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
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FDFBF5]/90 backdrop-blur-md shadow-sm border-b border-[#E6D5B8]/40 py-3 sm:py-3.5"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Logo - klik vraća na vrh */}
        <Link
          href="#hero"
          onClick={(e) => handleScrollTo(e, "#hero")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#C86D51]/30 shadow-sm group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Vintage Charm Logo"
              fill
              priority
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#2A2421]">
              Vintage Charm
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#C86D51] font-medium -mt-0.5">
              Dekoracije
            </span>
          </div>
        </Link>

        {/* Desktop navigacija */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-sm font-medium text-[#786F6A] hover:text-[#C86D51] transition-colors relative py-1 group cursor-pointer"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C86D51] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}

          {/* CTA dugme na desktopu */}
          <a
            href="#kontakt"
            onClick={(e) => handleScrollTo(e, "#kontakt")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C86D51] hover:bg-[#b55f45] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 ml-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Rezerviši termin
          </a>
        </nav>

        {/* Hamburger dugme za mobitel */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 md:hidden text-[#2A2421] hover:text-[#C86D51] rounded-full hover:bg-[#E6D5B8]/30 transition-colors"
          aria-label={isMobileMenuOpen ? "Zatvori meni" : "Otvori meni"}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobilni meni dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FDFBF5]/98 border-b border-[#E6D5B8]/50 backdrop-blur-xl px-6 py-6 shadow-xl"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-base font-medium text-[#2A2421] hover:text-[#C86D51] active:text-[#C86D51] transition-colors py-2 block cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#kontakt"
                  onClick={(e) => handleScrollTo(e, "#kontakt")}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C86D51] text-white text-xs uppercase tracking-wider font-semibold shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Rezerviši termin
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}