"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: isScrolled ? "0.75rem" : "1.5rem",
        paddingBottom: isScrolled ? "0.75rem" : "1.5rem",
        backgroundColor: isScrolled
          ? "rgba(253, 251, 245, 0.92)"
          : "rgba(253, 251, 245, 0)",
        boxShadow: isScrolled
          ? "0 10px 30px -10px rgba(42, 36, 33, 0.05)"
          : "0 0 0 0 rgba(0, 0, 0, 0)",
      }}
      transition={{
        duration: 0.45,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            animate={{
              width: isScrolled ? 42 : 50,
              height: isScrolled ? 42 : 50,
            }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="relative flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300"
          >
            <Image
              src="/logo.png"
              alt="Vintage Charm Dekoracije"
              fill
              sizes="50px"
              priority
              className="object-contain mix-blend-multiply"
            />
          </motion.div>
          <div className="flex flex-col">
            <motion.span
              animate={{
                fontSize: isScrolled ? "1.25rem" : "1.45rem",
              }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className="font-serif text-[#2A2421] tracking-wide leading-tight group-hover:text-[#C86D51] transition-colors"
            >
              Vintage Charm
            </motion.span>
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#786F6A]">
              Dekoracije
            </span>
          </div>
        </Link>

        {/* Desktop Navigacija: O nama, Galerija, Usluge, Kontakt */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2A2421]/90">
          <Link href="#o-nama" className="hover:text-[#C86D51] transition-colors duration-200">
            O nama
          </Link>
          <Link href="#galerija" className="hover:text-[#C86D51] transition-colors duration-200">
            Galerija
          </Link>
          <Link href="#usluge" className="hover:text-[#C86D51] transition-colors duration-200">
            Usluge
          </Link>
          <Link href="#kontakt" className="hover:text-[#C86D51] transition-colors duration-200">
            Kontakt
          </Link>
        </nav>

        {/* CTA dugme */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+38760000000"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full border border-[#C86D51] text-[#C86D51] hover:bg-[#C86D51] hover:text-white transition-all duration-300 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            Rezerviši termin
          </a>
        </div>

        {/* Mobilno dugme */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2A2421] hover:text-[#C86D51] transition-colors"
          aria-label="Otvori navigaciju"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FDFBF5] px-6 py-6 space-y-4 overflow-hidden shadow-xl"
          >
            <Link
              href="#o-nama"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-serif text-[#2A2421] hover:text-[#C86D51]"
            >
              O nama
            </Link>
            <Link
              href="#galerija"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-serif text-[#2A2421] hover:text-[#C86D51]"
            >
              Galerija
            </Link>
            <Link
              href="#usluge"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-serif text-[#2A2421] hover:text-[#C86D51]"
            >
              Usluge
            </Link>
            <Link
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-serif text-[#C86D51]"
            >
              Kontakt
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}