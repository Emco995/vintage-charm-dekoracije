"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface GalleryProject {
  id: string;
  folderName: string; // Tačan naziv foldera unutar public/galerija/
  title: string;
  category: "vjencanja" | "djevojacke" | "rodendani" | "zaruke";
  categoryLabel: string;
  aspectClass: string; // Različite visine za Pinterest / Masonry raspored
  description: string;
  imageCount: number; // Broj slika (1.jpg do n.jpg)
}

const projectList: GalleryProject[] = [
  {
    id: "autumun-wedding",
    folderName: "autumn wedding",
    title: "Autumn Wedding Čarolija",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-[440px]",
    description: "Topli jesenji tonovi, pampas trava i romantična rasvjeta.",
    imageCount: 7,
  },
  {
    id: "18i-rodjendan",
    folderName: "18i rodjendan",
    title: "Glamurozni 18. Rođendan",
    category: "rodendani",
    categoryLabel: "Rođendan",
    aspectClass: "h-80",
    description: "Organski balonski lukovi, neon brojevi i chic stolići za proslavu.",
    imageCount: 6,
  },
  {
    id: "boho-vjencanje",
    folderName: "boho vjencanje",
    title: "Boho Vjenčanje iz Snova",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-[400px]",
    description: "Sušeno cvijeće, prirodni materijali i ležerna estetika.",
    imageCount: 6,
  },
  {
    id: "capry-djevojacka",
    folderName: "capry djevojacka",
    title: "Capri Mediteranska Djevojačka",
    category: "djevojacke",
    categoryLabel: "Djevojačka",
    aspectClass: "h-72",
    description: "Limun motivi, pločice i osvježavajući ljetni ambijent.",
    imageCount: 5,
  },
  {
    id: "dream-white-wedding",
    folderName: "dream white wedding",
    title: "Dream White Vjenčanje",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-[450px]",
    description: "Elegancija u bijelim i krem nijansama sa raskošnim cvjetnim aranžmanima.",
    imageCount: 6,
  },
  {
    id: "zaruke-ljiljan",
    folderName: "zaruke ljiljan",
    title: "Romantične Zaruke Ljiljan",
    category: "zaruke",
    categoryLabel: "Zaruke",
    aspectClass: "h-80",
    description: "Intimna atmosfera uz svijeće, cvjetni luk i posebne trenutke.",
    imageCount: 5,
  },
  {
    id: "docek-kod-mlade",
    folderName: "docek kod mlade",
    title: "Svečani Doček kod Mlade",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-72",
    description: "Topla dobrodošlica gostima uz profinjenu postavku i detalje.",
    imageCount: 5,
  },
  {
    id: "fairy-piknik",
    folderName: "fairy piknik",
    title: "Fairy Bajkoviti Piknik",
    category: "djevojacke",
    categoryLabel: "Djevojačka / Piknik",
    aspectClass: "h-[390px]",
    description: "Niski drveni stolovi, jastuci, tkani ćilimi i ugođaj u prirodi.",
    imageCount: 6,
  },
  {
    id: "flowers-and-baloons-birthday",
    folderName: "flowers and baloons birthday",
    title: "Flowers & Balloons Proslava",
    category: "rodendani",
    categoryLabel: "Rođendan",
    aspectClass: "h-80",
    description: "Kombinacija svježeg cvijeća i pastelnih balona za pamćenje.",
    imageCount: 5,
  },
  {
    id: "rose-green-wedding",
    folderName: "rose&green wedding",
    title: "Rose & Green Vjenčana Bajka",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-[420px]",
    description: "Bujni eukaliptus, zelene girlande i nježne puder-roze ruže.",
    imageCount: 6,
  },
  {
    id: "ladybug-birthday",
    folderName: "ladybug rodjendan",
    title: "Ladybug Tematski Rođendan",
    category: "rodendani",
    categoryLabel: "Rođendan",
    aspectClass: "h-72",
    description: "Vesela i razigrana dekoracija za dječiji rođendan sa puno ljubavi.",
    imageCount: 5,
  },
  {
    id: "wedding-jessica",
    folderName: "wedding jessica",
    title: "Svečani Oltar Jessica",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-[440px]",
    description: "Predivna postavka vjenčanog oltara i mladenačkog stola.",
    imageCount: 6,
  },
  {
    id: "special-theme-rodjendan",
    folderName: "special theme rodjendan",
    title: "Special Theme Rođendan",
    category: "rodendani",
    categoryLabel: "Rođendan",
    aspectClass: "h-72",
    description: "Unikatan koncept prilagođen specifičnim željama slavljenika.",
    imageCount: 5,
  },
  {
    id: "zaruke-red",
    folderName: "zaruke red",
    title: "Red Passion Zaruke",
    category: "zaruke",
    categoryLabel: "Zaruke",
    aspectClass: "h-[380px]",
    description: "Crvene ruže, svjetlost svijeća i nezaboravan trenutak zaruka.",
    imageCount: 5,
  },
];

const INITIAL_VISIBLE_COUNT = 6;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("sve");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);

  const categories = [
    { id: "sve", label: "Svi Radovi" },
    { id: "vjencanja", label: "Vjenčanja" },
    { id: "djevojacke", label: "Djevojačke & Piknik" },
    { id: "rodendani", label: "Rođendani" },
    { id: "zaruke", label: "Zaruke" },
  ];

  // Generiše putanje: /galerija/naziv foldera/cover.jpg, pa 1.jpg do N.jpg
  const getProjectImages = (proj: GalleryProject): string[] => {
    const folderEncoded = encodeURIComponent(proj.folderName);
    const list = [`/galerija/${folderEncoded}/cover.jpg`];
    for (let i = 1; i <= proj.imageCount; i++) {
      list.push(`/galerija/${folderEncoded}/${i}.jpg`);
    }
    return list;
  };

  const filteredProjects =
    activeCategory === "sve"
      ? projectList
      : projectList.filter((p) => p.category === activeCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_VISIBLE_COUNT);

  const openProject = (proj: GalleryProject) => {
    setSelectedProject(proj);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
  };

  const currentImages = selectedProject ? getProjectImages(selectedProject) : [];

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  // Prečice na tastaturi (Escape, Strelice)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeProject();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, currentImages.length]);

  // Touch Swipe kontrole za mobitel
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) nextImage();
    else if (diff < -45) prevImage();
    touchStartX.current = null;
  };

  return (
    <section id="galerija" className="py-24 sm:py-32 bg-[#FDFBF5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Naslov sekcije */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6D5B8]/40 border border-[#C86D51]/30 text-[#C86D51] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Pinterest Galerija Radova
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A2421]">
            Trenuci pretvoreni u bajku
          </h2>
          <p className="text-sm sm:text-base text-[#786F6A]">
            Kliknite na bilo koju postavku da biste otvorili mini-galeriju sa svim fotografijama tog događaja.
          </p>
        </div>

        {/* Filter dugmad */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-12 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#C86D51] text-white shadow-md shadow-[#C86D51]/20 scale-105"
                  : "bg-[#F7F3EE] text-[#786F6A] hover:bg-[#E6D5B8]/50 hover:text-[#2A2421]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry raspored (3 stupca na desktopu, 2 na tabletu, 1 na mobitelu) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {visibleProjects.map((proj, index) => {
            const coverSrc = `/galerija/${encodeURIComponent(proj.folderName)}/cover.jpg`;
            const totalPhotos = proj.imageCount + 1; // cover + ostale numerisane slike

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onClick={() => openProject(proj)}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-[28px] bg-[#FAF6F0] border border-[#E6D5B8]/60 shadow-sm hover:shadow-2xl transition-all duration-500 mb-6"
              >
                {/* Slika s odgovarajućom visinom */}
                <div className={`relative w-full ${proj.aspectClass} overflow-hidden`}>
                  <Image
                    src={coverSrc}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Bedž s brojem fotografija */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 z-10 border border-white/20">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{totalPhotos} fotki</span>
                  </div>

                  {/* Prekrivač pri hoveru */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2421]/90 via-[#2A2421]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <span className="text-[11px] uppercase tracking-wider text-[#E6D5B8] font-semibold">
                      {proj.categoryLabel}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl mt-1 leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-1 line-clamp-2">
                      {proj.description}
                    </p>
                    <span className="text-xs text-[#E6D5B8] font-medium mt-3 flex items-center gap-1">
                      Pregledaj galeriju ({totalPhotos} slika) &rarr;
                    </span>
                  </div>
                </div>

                {/* Donji opis za mobilne uređaje bez hovera */}
                <div className="p-4 sm:hidden bg-[#FDFBF5] border-t border-[#E6D5B8]/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C86D51] font-semibold">
                      {proj.categoryLabel}
                    </span>
                    <h4 className="font-serif text-base text-[#2A2421] font-medium">
                      {proj.title}
                    </h4>
                  </div>
                  <span className="text-xs text-[#C86D51] font-medium">
                    Otvori ({totalPhotos})
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dugme za proširenje (Učitaj više / Prikaži manje) */}
        {filteredProjects.length > INITIAL_VISIBLE_COUNT && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FAF6F0] hover:bg-[#E6D5B8]/40 border border-[#C86D51]/40 text-[#2A2421] text-xs uppercase tracking-wider font-semibold transition-all shadow-sm hover:shadow"
            >
              {showAll ? (
                <>
                  Prikaži manje <ChevronUp className="w-4 h-4 text-[#C86D51]" />
                </>
              ) : (
                <>
                  Učitaj više radova ({filteredProjects.length - INITIAL_VISIBLE_COUNT}){" "}
                  <ChevronDown className="w-4 h-4 text-[#C86D51]" />
                </>
              )}
            </button>
          </div>
        )}

      </div>

      {/* Modalni Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2A2421]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Gornja traka: Naslov i Dugme Zatvori */}
            <div className="flex items-center justify-between z-20 max-w-6xl w-full mx-auto">
              <div>
                <span className="text-xs text-[#E6D5B8] uppercase tracking-wider font-medium">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeProject}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Zatvori galeriju"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Središnji prikaz slike sa navigacijom */}
            <div className="relative flex-1 flex items-center justify-center my-4">
              {currentImages.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/10 backdrop-blur-sm transition-all"
                  aria-label="Prethodna slika"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              <div className="relative w-full h-[60vh] sm:h-[72vh] max-w-4xl mx-auto flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentImages[currentImageIndex]}
                      alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                      fill
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {currentImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/10 backdrop-blur-sm transition-all"
                  aria-label="Sljedeća slika"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Donja traka: Brojač, opis i Thumbnail traka */}
            <div className="max-w-3xl w-full mx-auto space-y-3 z-20">
              <div className="flex items-center justify-between text-xs text-[#E6D5B8]">
                <span>{selectedProject.description}</span>
                <span className="font-semibold px-2.5 py-1 rounded-full bg-white/10">
                  {currentImageIndex + 1} / {currentImages.length}
                </span>
              </div>

              {/* Thumbnails */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
                {currentImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 transition-all ${
                      currentImageIndex === idx
                        ? "ring-2 ring-[#C86D51] scale-105 opacity-100"
                        : "opacity-40 hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="thumbnail"
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}