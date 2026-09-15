"use client";

import IntroSplash from "@/components/IntroSplash";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF5] text-[#2A2421] selection:bg-[#E6D5B8] selection:text-[#2A2421]">
      {/* 1. Intro Splash Screen */}
      <IntroSplash />

      {/* 2. Glavna navigacija */}
      <Navbar />

      {/* 3. Hero sekcija */}
      <Hero />

      {/* 4. O nama sekcija */}
      <About />

      {/* 5. Galerija radova */}
      <Gallery />

      {/* 6. Pregled usluga */}
      <section id="usluge" className="py-24 bg-[#FAF6F0] border-t border-[#E6D5B8]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A2421]">
            Kompletne Usluge Za Vaš Događaj
          </h2>
          <p className="text-[#786F6A] max-w-md mx-auto mt-3 text-sm">
            Prilagođavamo se vašem prostoru, temi i željama.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-left">
            <div className="p-8 rounded-3xl bg-[#FDFBF5] border border-[#E6D5B8]/40 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">💍</div>
              <h3 className="font-serif text-xl text-[#2A2421] mb-2">Vjenčanja & Oltari</h3>
              <p className="text-sm text-[#786F6A] leading-relaxed">
                Boho lukovi, pampas instalacije, makrame pozadine i dekoracija mola ili dvorana.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FDFBF5] border border-[#E6D5B8]/40 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🍋</div>
              <h3 className="font-serif text-xl text-[#2A2421] mb-2">Djevojačke Večeri</h3>
              <p className="text-sm text-[#786F6A] leading-relaxed">
                Tematski setovi poput Capri/Limun zabava, bazenskih instalacija i personalizovanih panela.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FDFBF5] border border-[#E6D5B8]/40 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🎈</div>
              <h3 className="font-serif text-xl text-[#2A2421] mb-2">Rođendani & Jubileji</h3>
              <p className="text-sm text-[#786F6A] leading-relaxed">
                Svijetleći 3D brojevi, moderni balonski lukovi i unikatni foto kutci za uspomene.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}