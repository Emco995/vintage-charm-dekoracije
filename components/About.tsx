"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, HeartHandshake, Flower2, Palette } from "lucide-react";

export default function About() {
  return (
    <section id="o-nama" className="py-24 sm:py-32 bg-[#F7F3EE] relative overflow-hidden">
      {/* Suptilna pozadinska tekstura i meki krugovi */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6D5B8]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#C86D51]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          
          {/* Lijeva strana: Estetska slika sa mekim prelazom i bedžom */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Slika aranžmana stopljena s mekim ovalnim uglovima */}
              <div
                className="relative h-[460px] sm:h-[520px] w-full rounded-[40px] overflow-hidden shadow-xl"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 90% 90% at 50% 50%, black 75%, transparent 100%)",
                  maskImage:
                    "radial-gradient(ellipse 90% 90% at 50% 50%, black 75%, transparent 100%)",
                }}
              >
                <Image
                  src="/galerija-2.jpg"
                  alt="Vintage Charm dekoracija svečanog stola"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Plutajući boho detalj s desne strane */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#FDFBF5] p-5 rounded-3xl shadow-xl border border-[#E6D5B8]/80 max-w-[220px]">
                <p className="font-serif italic text-2xl text-[#C86D51] font-medium leading-none">
                  Svaki detalj
                </p>
                <p className="text-xs text-[#786F6A] mt-1.5 leading-relaxed">
                  priča priču vaše jedinstvene ljubavi i radosti.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Desna strana: Priča brenda i ključne vrijednosti */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6D5B8]/50 border border-[#C86D51]/30 text-[#C86D51] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Naša Priča & Vizija
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2421] font-normal leading-[1.2]">
              Kreiramo atmosferu u kojoj se trenuci pretvaraju u{" "}
              <span className="italic text-[#C86D51] font-medium">
                najdraže uspomene
              </span>
            </h2>

            <div className="space-y-4 text-[#786F6A] text-sm sm:text-base leading-relaxed">
              <p>
                <b>Vintage Charm Dekoracije</b> nastale su iz iskrene strasti prema estetici,
                toplim prirodnim materijalima i želji da svaka proslava dobije svoju prepoznatljivu dušu. 
                Vjerujemo da dekoracija nije samo ukras prostora – ona je prvi osmijeh vaših gostiju, 
                savršena pozadina na fotografijama i osjećaj topline koji ostaje dugo nakon što se svjetla ugase.
              </p>
              <p>
                Bilo da maštate o bajkovitom vjenčanju pod krošnjama drveća uz pampas i pletene detalje, 
                elegantnoj proslavi u svečanoj dvorani, mediteranskoj djevojačkoj večeri ili rođendanu punom sjaja, 
                svakom projektu pristupamo individualno, sa puno posvećenosti i pažnje prema svakoj sitnici.
              </p>
            </div>

            {/* Tri stuba našeg pristupa */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              <div className="p-4 rounded-2xl bg-[#FDFBF5] border border-[#E6D5B8]/50">
                <div className="w-9 h-9 rounded-xl bg-[#C86D51]/10 flex items-center justify-center text-[#C86D51] mb-3">
                  <Palette className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-[#2A2421] font-medium mb-1">
                  Autentičan Dizajn
                </h4>
                <p className="text-xs text-[#786F6A] leading-relaxed">
                  Bez šablona – svaka tema se kreira prema vašem ukusu i energiji.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FDFBF5] border border-[#E6D5B8]/50">
                <div className="w-9 h-9 rounded-xl bg-[#7D8C71]/15 flex items-center justify-center text-[#7D8C71] mb-3">
                  <Flower2 className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-[#2A2421] font-medium mb-1">
                  Prirodni Elementi
                </h4>
                <p className="text-xs text-[#786F6A] leading-relaxed">
                  Bogatstvo suhog cvijeća, pampasa, tekstura drveta i raskošnih aranžmana.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FDFBF5] border border-[#E6D5B8]/50">
                <div className="w-9 h-9 rounded-xl bg-[#C86D51]/10 flex items-center justify-center text-[#C86D51] mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base text-[#2A2421] font-medium mb-1">
                  Mir & Povjerenje
                </h4>
                <p className="text-xs text-[#786F6A] leading-relaxed">
                  Kompletna postavka i demontaža – vi samo uživajte u svom danu.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}