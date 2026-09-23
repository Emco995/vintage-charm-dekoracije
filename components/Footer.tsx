import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2A2421] text-[#FDFBF5] pt-16 pb-12 border-t border-[#3A322E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Logo i opis */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-[#FDFBF5] rounded-full p-1 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Vintage Charm"
                  fill
                  sizes="40px"
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <span className="font-serif text-2xl tracking-wide text-[#FDFBF5]">
                Vintage Charm
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#E6D5B8]/80 leading-relaxed max-w-sm">
              Unikatne dekoracije za vjenčanja, djevojačke večeri, rođendane i posebne trenutke.
              Stvaramo atmosferu koja se pamti.
            </p>
          </div>

          {/* Brzi linkovi */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C86D51] font-semibold">
              Navigacija
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E6D5B8]/80">
              <li><Link href="#o-nama" className="hover:text-white transition-colors">O nama</Link></li>
              <li><Link href="#galerija" className="hover:text-white transition-colors">Galerija Radova</Link></li>
              <li><Link href="#usluge" className="hover:text-white transition-colors">Usluge & Paketi</Link></li>
              <li><Link href="#kontakt" className="hover:text-white transition-colors">Kontakt & Rezervacije</Link></li>
            </ul>
          </div>

          {/* Radno vrijeme & lokacija */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C86D51] font-semibold">
              Dostupnost
            </h4>
            <p className="text-xs sm:text-sm text-[#E6D5B8]/80 leading-relaxed">
              Dostupni za postavke na lokacijama širom regije po dogovoru.
            </p>
            <p className="text-xs text-[#E6D5B8]/60 pt-2">
              Radujemo se što ćemo biti dio vašeg najljepšeg dana!
            </p>
          </div>

        </div>

        {/* Donji autorski red */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E6D5B8]/60 gap-4">
          <p>© {new Date().getFullYear()} Vintage Charm Dekoracije. Sva prava zadržana.</p>
          <p className="italic">Kreirano s ljubavlju prema detaljima</p>
        </div>
      </div>
    </footer>
  );
}