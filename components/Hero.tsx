"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#FDFBF5]">
      {/* Suptilna pozadinska toplina */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#E6D5B8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Lijeva tekstualna strana */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6D5B8]/30 border border-[#C86D51]/20 text-[#C86D51] text-xs font-semibold tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Ručno kreirane Dekoracije Za Sve Prilike
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2A2421] font-normal leading-[1.15] tracking-tight"
            >
              Pretvaramo vaše posebne trenutke u{" "}
              <span className="italic text-[#C86D51] font-medium underline decoration-[#E6D5B8] underline-offset-8">
                nezaboravnu bajku
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#786F6A] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Kreiramo jedinstvene dekoracije za vjenčanja na otvorenom i u svečanim salama, 
              zaruke, djevojačke večeri, rođendane i posebne jubileje. Od prepoznatljivog 
              boho šarma do bezvremenske elegancije – svaki foto kutak, luk i cvjetni 
              detalj osmišljavamo s ljubavlju i prilagođavamo vašoj viziji.
            </motion.p>

            {/* CTA Dugmad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link
                href="#kontakt"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C86D51] text-white font-medium text-sm tracking-wider uppercase hover:bg-[#b05c42] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                Zatražite Ponudu
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#galerija"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#2A2421]/30 text-[#2A2421] font-medium text-sm tracking-wider uppercase hover:border-[#C86D51] hover:text-[#C86D51] transition-all flex items-center justify-center"
              >
                Pogledajte Radove
              </Link>
            </motion.div>

            {/* Social proof tagovi */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#786F6A]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7D8C71]" />
                100% Personalizovano
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C86D51]" />
                Na otvorenom & u salama
              </div>
            </motion.div>
          </div>

          {/* Desna slika: Potpuno stopljena u pozadinu bez ikakvog okvira ili vidljivih ivica */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg h-[500px] sm:h-[580px]">
              
              {/* 
                KLJUČNO: WebkitMaskImage stvara mekani ovalni prelaz.
                Svi rubovi (vrh, dno, lijevo, desno) se postepeno tope u #FDFBF5,
                tako da dekoracija izgleda kao da je naslikana direktno na pozadini stranice.
              */}
              <div
                className="relative w-full h-full"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 80% 85% at 50% 50%, black 50%, transparent 95%)",
                  maskImage:
                    "radial-gradient(ellipse 80% 85% at 50% 50%, black 50%, transparent 95%)",
                }}
              >
                <Image
                  src="/hero-boho.jpg"
                  alt="Boho vjenčana dekoracija sa pampasom i drvenom foteljom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Plutajući bedž bez oštrih okvira */}
              <div className="absolute -bottom-2 left-6 sm:left-2 bg-[#FDFBF5]/90 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-lg border border-[#E6D5B8]/50 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#C86D51]/10 flex items-center justify-center text-[#C86D51]">
                  <Heart className="w-5 h-5 fill-[#C86D51]" />
                </div>
                <div>
                  <div className="font-serif font-bold text-lg text-[#2A2421]">150+</div>
                  <div className="text-[11px] text-[#786F6A]">Uspješnih proslava</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}