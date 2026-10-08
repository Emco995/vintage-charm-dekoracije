"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
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
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FDFBF5] to-[#FDFBF5]"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E6D5B8]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C86D51]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6D5B8]/50 border border-[#C86D51]/30 text-[#C86D51] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Unikatne dekoracije za vaše najvažnije dane
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A2421] leading-[1.15] font-normal">
              Vaše uspomene pretvaramo u{" "}
              <span className="italic font-serif text-[#C86D51]">
                vanvremensku bajku
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#786F6A] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Kreiramo personalizovane i autentične postavke za vjenčanja, djevojačke večeri,
              rođendane i posebne trenutke. Svaki detalj osmišljen je s ljubavlju i stilom.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => handleScrollTo("kontakt")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C86D51] hover:bg-[#b55f45] text-white text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span>Rezerviši svoj datum</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo("galerija")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF6F0] hover:bg-[#E6D5B8]/40 border border-[#C86D51]/30 text-[#2A2421] text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all"
              >
                Pogledaj galeriju
              </button>
            </div>

            <div className="pt-6 border-t border-[#E6D5B8]/60 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-semibold">100+</p>
                <p className="text-[11px] sm:text-xs text-[#786F6A]">Uspješnih evenata</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-semibold">100%</p>
                <p className="text-[11px] sm:text-xs text-[#786F6A]">Posvećenost detalju</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-semibold">5★</p>
                <p className="text-[11px] sm:text-xs text-[#786F6A]">Ocjena mladenaca</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl group">
              <Image
                src="/sana.jpg"
                alt="Vintage Charm Boho Dekoracija"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-[#2A2421]/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3.5 text-white"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C86D51] flex items-center justify-center text-white flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-serif font-medium text-[#FDFBF5]">
                    Prirodna boho estetika
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#E6D5B8]">
                    Ručno rađeni detalji i pažljivo birano cvijeće
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}