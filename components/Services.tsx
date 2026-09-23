"use client";

import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Vjenčana Bajka",
    subtitle: "Ceremonije na otvorenom i u dvoranama",
    badge: "Najtraženije",
    icon: "💍",
    features: [
      "Boho drveni ili metalni oltarni lukovi",
      "Pampas trava, suho i svježe cvijeće",
      "Dekoracija mladenačkog i gostinjskih stolova",
      "Table dobrodošlice sa štafelajem",
      "Kompletna dostava, montaža i demontaža",
    ],
  },
  {
    id: 2,
    title: "Djevojačke Večeri",
    subtitle: "Tematski trenuci za najdraže uspomene",
    badge: "Popularno",
    icon: "🍋",
    features: [
      "Capri / Limun mediteranska estetika",
      "Niski boho piknik stolovi sa jastucima",
      "Personalizovani paneli i natpisi",
      "Čaše, salvete i detalji usklađeni s temom",
      "Foto zona prilagođena prostoru ili bazenu",
    ],
  },
  {
    id: 3,
    title: "Rođendani & Jubileji",
    subtitle: "Od prvog rođendana do velikih proslava",
    badge: "Sve generacije",
    icon: "🎈",
    features: [
      "Svijetleći retro 3D brojevi sa LED rasvjetom",
      "Organske balonske girlande i lukovi",
      "Safari, pastelne ili glamur teme",
      "Stalci za torte i slatki stol (Candy bar)",
      "Brza postavka na lokaciji proslave",
    ],
  },
  {
    id: 4,
    title: "Foto Kutci & Zaruke",
    subtitle: "Intimne scene za savršene kadrove",
    badge: "Unikatno",
    icon: "✨",
    features: [
      "Romantične 'Will You Marry Me' scene",
      "Makrame zavjese, tepisi i svijećnjaci",
      "Neon natpisi i suptilna rasvjeta",
      "Rekviziti prilagođeni vašoj ljubavnoj priči",
      "Idealno za proslave na otvorenom i zalazak sunca",
    ],
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-24 sm:py-32 bg-[#FAF6F0] relative overflow-hidden">
      {/* Blaga pozadinska tekstura */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#E6D5B8]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C86D51]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Naslov sekcije */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6D5B8]/40 border border-[#C86D51]/30 text-[#C86D51] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Šta nudimo
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A2421]">
            Naše Usluge & Paketi Dekoracija
          </h2>
          <p className="text-sm sm:text-base text-[#786F6A]">
            Svaki paket u potpunosti prilagođavamo vašim željama, prostoru i budžetu.
          </p>
        </div>

        {/* Grid usluga */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FDFBF5] rounded-[32px] p-8 border border-[#E6D5B8]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Zaglavlje kartice */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{service.icon}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C86D51] bg-[#C86D51]/10 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#2A2421] group-hover:text-[#C86D51] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#786F6A] mt-2 mb-6">
                  {service.subtitle}
                </p>

                {/* Lista stavki */}
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#2A2421]/90 mb-8 border-t border-[#E6D5B8]/30 pt-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#7D8C71]/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#7D8C71]">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dugme za upit za ovu specifičnu uslugu */}
              <Link
                href="#kontakt"
                className="w-full py-3 px-4 rounded-full border border-[#2A2421]/20 text-[#2A2421] text-xs font-semibold uppercase tracking-wider text-center group-hover:bg-[#C86D51] group-hover:border-[#C86D51] group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Zatražite termin
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}