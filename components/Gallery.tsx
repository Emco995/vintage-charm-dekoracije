"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import { galleryProjects, ProjectItem, Category } from "@/data/galleryData";

const ITEMS_PER_PAGE = 12; // 4 reda x 3 kolone

const categories: { label: string; value: Category }[] = [
  { label: "Sve Dekoracije", value: "sve" },
  { label: "Vjenčanja", value: "vjencanja" },
  { label: "Zaruke", value: "zaruke" },
  { label: "Djevojačke Večeri", value: "djevojacke" },
  { label: "Rođendani & Jubileji", value: "rodjendani" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("sve");
  const [currentPage, setCurrentPage] = useState(1);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryRef = useRef<HTMLElement>(null);

  // Filtriranje projekata
  const filteredProjects =
    activeCategory === "sve"
      ? galleryProjects
      : galleryProjects.filter((item) => item.category === activeCategory);

  // Izračun paginacije
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Promjena kategorije resetuje na 1. stranicu
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setSlideDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);

    // Blagi skrol na početak galerije ako je korisnik bio nisko
    if (galleryRef.current) {
      const topOffset = galleryRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const openProjectModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, nextImage, prevImage]);

  return (
    <section ref={galleryRef} id="galerija" className="py-24 sm:py-32 bg-[#FDFBF5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Naslov sekcije */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6D5B8]/40 border border-[#C86D51]/30 text-[#C86D51] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio Radova
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A2421]">
            Naše kreacije u stvarnom prostoru
          </h2>
          <p className="text-sm sm:text-base text-[#786F6A]">
            Kliknite na bilo koji događaj da otvorite kompletnu foto priču sa svim detaljima postavke.
          </p>
        </div>

        {/* Filter dugmad */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#C86D51] text-white shadow-md shadow-[#C86D51]/20 scale-105"
                    : "bg-[#F7F3EE] text-[#786F6A] hover:bg-[#E6D5B8]/50 hover:text-[#2A2421]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Kontejner mreže sa glatkom horizontalnom animacijom smjene stranica */}
        <div className="relative min-h-[600px] overflow-hidden">
          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              custom={slideDirection}
              initial={{ opacity: 0, x: slideDirection * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection * -60 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openProjectModal(project)}
                  className="group bg-[#F7F3EE] rounded-[32px] overflow-hidden border border-[#E6D5B8]/50 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col cursor-pointer"
                >
                  {/* Cover Slika */}
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Bedž kategorije */}
                    <span className="absolute top-4 left-4 bg-[#FDFBF5]/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#C86D51] uppercase tracking-wider shadow-sm">
                      {project.categoryLabel}
                    </span>

                    {/* Bedž ukupnog broja slika */}
                    <div className="absolute top-4 right-4 bg-[#2A2421]/80 backdrop-blur-md text-[#FDFBF5] text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                      <Images className="w-3.5 h-3.5 text-[#E6D5B8]" />
                      <span>{project.images.length} fotografija</span>
                    </div>

                    {/* Hover prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-5 py-2.5 rounded-full bg-[#FDFBF5]/90 backdrop-blur-md text-[#2A2421] text-xs font-semibold tracking-wider uppercase shadow-lg">
                        Pregledaj album
                      </span>
                    </div>
                  </div>

                  {/* Tekst kartice */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] group-hover:text-[#C86D51] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#786F6A] mt-2 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* HORIZONTALNI PAGINACIJSKI KONTROLER (Prikazuje se samo ako ima više od 12 tema) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-16 pt-8 border-t border-[#E6D5B8]/40">
            {/* Prethodna stranica */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 rounded-full border border-[#E6D5B8] flex items-center justify-center transition-all ${
                currentPage === 1
                  ? "opacity-30 cursor-not-allowed text-[#786F6A]"
                  : "bg-[#F7F3EE] hover:bg-[#C86D51] hover:text-white text-[#2A2421] shadow-sm"
              }`}
              aria-label="Prethodna stranica"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Brojevi stranica */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-11 h-11 rounded-full text-sm font-medium transition-all ${
                    currentPage === pageNum
                      ? "bg-[#C86D51] text-white shadow-md shadow-[#C86D51]/20 scale-105"
                      : "bg-[#F7F3EE] text-[#786F6A] hover:bg-[#E6D5B8]/50 hover:text-[#2A2421]"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Sljedeća stranica */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full border border-[#E6D5B8] flex items-center justify-center transition-all ${
                currentPage === totalPages
                  ? "opacity-30 cursor-not-allowed text-[#786F6A]"
                  : "bg-[#F7F3EE] hover:bg-[#C86D51] hover:text-white text-[#2A2421] shadow-sm"
              }`}
              aria-label="Sljedeća stranica"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>

      {/* MODAL SLIDER (Galerija unutar galerije) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#2A2421]/95 backdrop-blur-md p-4 sm:p-6 select-none"
            onClick={closeModal}
          >
            {/* Header modala */}
            <div
              className="flex items-center justify-between text-[#FDFBF5] max-w-7xl w-full mx-auto pb-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#E6D5B8]">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FDFBF5]">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs tracking-widest text-[#E6D5B8]/80 font-mono">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </span>
                <button
                  onClick={closeModal}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FDFBF5] transition-colors"
                  aria-label="Zatvori galeriju"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Glavni slajder */}
            <div
              className="relative flex-1 flex items-center justify-center max-w-5xl w-full mx-auto my-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all"
                aria-label="Prethodna slika"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - slika ${currentImageIndex + 1}`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  priority
                  className="object-contain"
                />
              </div>

              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all"
                aria-label="Sljedeća slika"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Donji thumbnails */}
            <div
              className="max-w-4xl w-full mx-auto pt-3 space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-center text-xs sm:text-sm text-[#E6D5B8]/90 max-w-xl mx-auto">
                {selectedProject.description}
              </p>

              <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2">
                {selectedProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all ${
                      idx === currentImageIndex
                        ? "ring-2 ring-[#C86D51] scale-105 opacity-100"
                        : "opacity-40 hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="64px"
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