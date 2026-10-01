"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  event: string;
  comment: string;
  date: string;
}

const allTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lejla & Faris",
    role: "Mladenci",
    event: "Boho vjenčanje na molu",
    comment:
      "Oltar i stolovi su izgledali kao sa Pinteresta! Pampas trava, cvijeće i detalji na molu stvorili su nestvarnu atmosferu. Gosti su satima pričali o dekoraciji i slikali se bez prestanka.",
    date: "August 2025.",
  },
  {
    id: 2,
    name: "Ema K.",
    role: "Kuma",
    event: "Capri Limun djevojačka večer",
    comment:
      "Organizacija djevojačke uz bazen sa Vintage Charm timom bila je najlakša stvar ikad. Limun tema sa mediteranskim pločicama i pletenim detaljima ostavila je mladu bez teksta. Svaka preporuka!",
    date: "Juli 2025.",
  },
  {
    id: 3,
    name: "Nejra & Tarik",
    role: "Mladenci",
    event: "Svečana dvorana & svadbeni stol",
    comment:
      "Nevjerovatna posvećenost detaljima. Terakota i zlatni tonovi cvijeća savršeno su se uklopili u salu. Sve je bilo postavljeno na vrijeme i bez ijednog trenutka stresa za nas.",
    date: "Septembar 2025.",
  },
  {
    id: 4,
    name: "Dino S.",
    role: "Zaručnik",
    event: "Zaruke na otvorenom uz svijeće",
    comment:
      "Želio sam intimnu atmosferu u prirodi sa neon natpisom i svijećama. Ekipa je prevazišla sva moja očekivanja, a njena reakcija kada je ugledala scenu bila je neprocjenjiva!",
    date: "Maj 2025.",
  },
  {
    id: 5,
    name: "Amra M.",
    role: "Slavljenica",
    event: "Glamur 18. rođendana",
    comment:
      "Svijetleći 3D brojevi i organski balonski luk u berry tonovima bili su apsolutni hit večeri! Sve fotke na Instagramu izgledaju premoćno zahvaljujući vama.",
    date: "Oktobar 2025.",
  },
  {
    id: 6,
    name: "Sara & Mirza",
    role: "Mladenci",
    event: "Rustikalno vjenčanje u bašti",
    comment:
      "Od prvog razgovora do demontaže sve je teklo besprijekorno. Preciznost, ljubav prema poslu i toplina koju unose u svaki detalj vidljiva je iz svakog ugla.",
    date: "Juni 2025.",
  },
  {
    id: 7,
    name: "Hana B.",
    role: "Majka",
    event: "1. Rođendan - Safari Boho",
    comment:
      "Kombinacija zemljanih tonova, plišanih detalja i personalizovane table dobrodošlice bila je bajka za prvi rođendan našeg dječaka. Sve preporuke od srca!",
    date: "Novembar 2025.",
  },
  {
    id: 8,
    name: "Jasmina R.",
    role: "Mlada",
    event: "Piknik djevojačka zabava",
    comment:
      "Niski drveni stolovi, jastuci, ležerna estetika i predivni cvjetni aranžmani. Osjećale smo se kao u nekom filmu. Definitivno biramo Vintage Charm za svaku iduću priliku.",
    date: "August 2025.",
  },
  {
    id: 9,
    name: "Adnan & Selma",
    role: "Mladenci",
    event: "Cvjetni oltar uz rijeku",
    comment:
      "Spontano smo mijenjali lokaciju zbog vremena, a oni su se prilagodili u trenu i napravili remek-djelo. Profesionalnost na najvišem nivou i estetika za čistu desetku!",
    date: "Maj 2025.",
  },
];

const ITEMS_PER_SLIDE = 3;
const TOTAL_SLIDES = Math.ceil(allTestimonials.length / ITEMS_PER_SLIDE);

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? TOTAL_SLIDES - 1 : prev - 1));
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Automatska rotacija svakih 5 sekundi (pauzira se kada je miš iznad ili se vrši touch)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Touch kontrole za swipe na mobitelu
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  // Prikaz trenutne 3 recenzije za aktivni slide
  const currentBatch = allTestimonials.slice(
    currentSlide * ITEMS_PER_SLIDE,
    currentSlide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  );

  return (
    <section
      className="py-24 sm:py-32 bg-[#F7F3EE] relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pozadinski svjetlosni akcenti */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E6D5B8]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#C86D51]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Naslov sekcije */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6D5B8]/50 border border-[#C86D51]/30 text-[#C86D51] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Iskustva Klijenata
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A2421]">
            Riječi onih koji su nam ukazali povjerenje
          </h2>
          <p className="text-sm sm:text-base text-[#786F6A]">
            Svakih 5 sekundi donosimo nove priče. Prevucite prstom ili koristite strelice za ručno listanje.
          </p>
        </div>

        {/* Glavni slajder kontejner sa glatkom horizontalnom smjenom 3 po 3 kartice */}
        <div className="relative mt-16 min-h-[460px] sm:min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {currentBatch.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FDFBF5] rounded-[32px] p-8 sm:p-9 border border-[#E6D5B8]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
                >
                  <div className="space-y-4">
                    {/* Zvjezdice i ikona navodnika */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#C86D51]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#C86D51]" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-[#E6D5B8] group-hover:text-[#C86D51]/40 transition-colors" />
                    </div>

                    {/* Tekst utiska */}
                    <p className="text-sm sm:text-base text-[#2A2421]/90 leading-relaxed italic">
                      "{item.comment}"
                    </p>
                  </div>

                  {/* Informacije o autoru */}
                  <div className="pt-6 mt-6 border-t border-[#E6D5B8]/40 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#2A2421]">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#C86D51] font-medium mt-0.5">
                        {item.event}
                      </p>
                    </div>
                    <span className="text-[11px] text-[#786F6A]">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigacijski kontroleri (Strelice i Dot indikatori) */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Dugme prethodna */}
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-[#FDFBF5] border border-[#E6D5B8] text-[#2A2421] hover:bg-[#C86D51] hover:text-white transition-all shadow-sm"
            aria-label="Prethodne recenzije"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Tačkice (Dots) sa indikatorom aktivne grupe */}
          <div className="flex items-center gap-2.5">
            {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  currentSlide === idx
                    ? "w-8 bg-[#C86D51]"
                    : "w-2.5 bg-[#E6D5B8] hover:bg-[#C86D51]/50"
                }`}
                aria-label={`Prikaži recenzije grupa ${idx + 1}`}
              />
            ))}
          </div>

          {/* Dugme sljedeća */}
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-[#FDFBF5] border border-[#E6D5B8] text-[#2A2421] hover:bg-[#C86D51] hover:text-white transition-all shadow-sm"
            aria-label="Sljedeće recenzije"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}