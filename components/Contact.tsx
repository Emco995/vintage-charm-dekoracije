"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Phone, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#FDFBF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-start">
          
          {/* Lijeva strana: Informacije i stvarni kontakti prijateljice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6D5B8]/40 border border-[#C86D51]/30 text-[#C86D51] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Rezervacije & Upiti
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A2421] leading-tight">
              Isplanirajmo vaš savršen dan zajedno
            </h2>

            <p className="text-sm sm:text-base text-[#786F6A] leading-relaxed">
              Javite nam se s vašom idejom, željenim datumom i lokacijom. Odgovaramo u najkraćem roku sa prijedlozima postavke i okvirnom ponudom.
            </p>

            {/* Brzi kanali komunikacije */}
            <div className="space-y-4 pt-4">
              {/* WhatsApp direktan chat */}
              <a
                href="https://wa.me/38762317694"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7F3EE] border border-[#E6D5B8]/60 hover:border-[#C86D51] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center text-xl">
                  💬
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#786F6A] block">
                    Pišite nam na WhatsApp
                  </span>
                  <span className="font-medium text-[#2A2421] group-hover:text-[#C86D51] transition-colors">
                    +387 062 317 694
                  </span>
                </div>
              </a>

              {/* Instagram link */}
              <a
                href="https://www.instagram.com/vintage__charm_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7F3EE] border border-[#E6D5B8]/60 hover:border-[#C86D51] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center text-xl">
                  📸
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#786F6A] block">
                    Zaprati nas na Instagramu
                  </span>
                  <span className="font-medium text-[#2A2421] group-hover:text-[#C86D51] transition-colors">
                    @vintage__charm_
                  </span>
                </div>
              </a>

              {/* Telefonski poziv */}
              <a
                href="tel:+38762317694"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7F3EE] border border-[#E6D5B8]/60 hover:border-[#C86D51] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C86D51]/10 text-[#C86D51] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#786F6A] block">
                    Direktan poziv
                  </span>
                  <span className="font-medium text-[#2A2421] group-hover:text-[#C86D51] transition-colors">
                    +387 062 317 694
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Desna strana: Forma */}
          <div className="lg:col-span-7 bg-[#F7F3EE] rounded-[36px] p-8 sm:p-10 border border-[#E6D5B8]/70 shadow-lg">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#7D8C71]/20 text-[#7D8C71] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#2A2421]">
                  Hvala vam na upitu!
                </h3>
                <p className="text-sm text-[#786F6A] max-w-md mx-auto">
                  Zaprimili smo vaše podatke. Javit ćemo vam se u najkraćem roku sa detaljima i ponudom.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#786F6A] mb-2">
                      Vaše Ime i Prezime *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="npr. Amina Hadžić"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FDFBF5] border border-[#E6D5B8] focus:border-[#C86D51] outline-none text-sm text-[#2A2421]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#786F6A] mb-2">
                      Broj Telefona / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+387 6X ..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FDFBF5] border border-[#E6D5B8] focus:border-[#C86D51] outline-none text-sm text-[#2A2421]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#786F6A] mb-2">
                      Datum Događaja *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FDFBF5] border border-[#E6D5B8] focus:border-[#C86D51] outline-none text-sm text-[#2A2421]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#786F6A] mb-2">
                      Vrsta Događaja *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FDFBF5] border border-[#E6D5B8] focus:border-[#C86D51] outline-none text-sm text-[#2A2421]"
                    >
                      <option value="">Odaberite vrstu</option>
                      <option value="vjencanje">Vjenčanje & Oltar</option>
                      <option value="zaruke">Zaruke</option>
                      <option value="djevojacka">Djevojačka Večer</option>
                      <option value="rodjendan">Rođendan / Jubilej</option>
                      <option value="ostalo">Ostalo / Foto Kutak</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#786F6A] mb-2">
                    Lokacija & Želje (Okvirni opis)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Opišite nam prostor (otvoreno/sala), broj gostiju i tematske želje..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FDFBF5] border border-[#E6D5B8] focus:border-[#C86D51] outline-none text-sm text-[#2A2421] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#C86D51] text-white font-medium text-sm tracking-wider uppercase hover:bg-[#b05c42] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Pošalji Upit za Rezervaciju
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}