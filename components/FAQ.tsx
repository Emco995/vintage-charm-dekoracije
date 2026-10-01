"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Koliko ranije je potrebno rezervisati termin za proslavu?",
    answer:
      "Za vjenčanja u sezoni (od maja do oktobra) preporučujemo rezervaciju 3 do 6 mjeseci unaprijed kako bismo osigurali datum i nabavili sve specifične elemente. Za rođendane, djevojačke večeri i manje proslave optimalno je javiti se 2 do 4 sedmice ranije.",
  },
  {
    id: 2,
    question: "Radite li dekoracije van vašeg primarnog grada?",
    answer:
      "Da, radimo postavke na lokacijama širom regije. Putni troškovi i transport opreme se obračunavaju transparentno u zavisnosti od kilometraže do lokacije vašeg događaja.",
  },
  {
    id: 3,
    question: "Šta se dešava ako je proslava na otvorenom, a najavljena je kiša?",
    answer:
      "Uvijek imamo spreman Plan B! Pratimo vremensku prognozu nekoliko dana ranije i u dogovoru s vama elemente prilagođavamo natkrivenom dijelu, šatoru ili unutrašnjoj dvorani bez gubitka estetike i planiranog šarma.",
  },
  {
    id: 4,
    question: "Da li je u cijenu uračunata montaža i demontaža dekoracija?",
    answer:
      "Apsolutno da. Naš tim dolazi na lokaciju prije početka događaja, postavlja sve elemente do najsitnijeg detalja, a po završetku proslave (ili idućeg jutra, po dogovoru) vrši demontažu i odvoz opreme. Vaše je samo da uživate.",
  },
  {
    id: 5,
    question: "Mogu li donijeti svoju sliku sa Pinteresta ili Instagrama?",
    answer:
      "Naravno! Pinterest i Instagram inspiracije su odlična polazna tačka. Na osnovu vaših referenci kreiramo moodboard i prilagođavamo dizajn vašem prostoru, budžetu i ličnim željama.",
  },
  {
    id: 6,
    question: "Kako funkcioniše rezervacija i plaćanje?",
    answer:
      "Termin se smatra zvanično rezervisanim nakon uplate avansa (kapare), čime zaključavamo datum u našem kalendaru. Preostali iznos se uplaćuje na dan proslave ili neposredno prije montaže.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1); // Prvo pitanje je otvoreno po defaultu

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FDFBF5] relative overflow-hidden">
      {/* Blagi pozadinski krug */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#E6D5B8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Naslov sekcije */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6D5B8]/40 border border-[#C86D51]/30 text-[#C86D51] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Često postavljana pitanja
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A2421]">
            Sve što trebate znati prije proslave
          </h2>
          <p className="text-sm sm:text-base text-[#786F6A] max-w-xl mx-auto">
            Imate nedoumice oko organizacije i dekoracije? Izdvojili smo odgovore na pitanja koja nam mladenci i klijenti najčešće postavljaju.
          </p>
        </div>

        {/* Accordion lista */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#F7F3EE] border-[#C86D51]/40 shadow-md"
                    : "bg-[#FDFBF5] border-[#E6D5B8]/60 hover:border-[#C86D51]/30"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#2A2421] font-medium leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#C86D51] text-white rotate-180"
                        : "bg-[#E6D5B8]/40 text-[#2A2421]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#786F6A] leading-relaxed border-t border-[#E6D5B8]/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dodatni poziv za pitanja koja nisu na listi */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#FAF6F0] border border-[#E6D5B8]/60 text-center space-y-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#C86D51]/10 text-[#C86D51] mx-auto">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl text-[#2A2421]">
            Imate pitanje koje ovdje nije navedeno?
          </h3>
          <p className="text-xs sm:text-sm text-[#786F6A] max-w-md mx-auto">
            Rado ćemo odgovoriti na sve vaše specifične želje i osmisliti rješenje za vaš prostor.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/38762317694"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C86D51] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#b05c42] transition-colors shadow-sm"
            >
              Pitajte nas direktno na WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}