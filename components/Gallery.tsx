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
  folderName: string;
  title: string;
  category: "vjencanja" | "djevojacke" | "rodendani" | "zaruke" | "manifestacije";
  categoryLabel: string;
  aspectClass: string;
  description: string;
  imageCount: number;
}

const projectList: GalleryProject[] = [
  {
    id: "autumn-wedding",
    folderName: "autumn wedding",
    title: "Autumn Wedding Čarolija",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-64 sm:h-[420px]",
    description: "Topli jesenji tonovi, pampas trava i romantična rasvjeta.",
    imageCount: 7,
  },
  {
    id: "vjencanje-u-prirodi",
    folderName: "vjencanje u prirodi",
    title: "Vjencanje u prirodi na staroj dobroj lokaciji-Jezero Hazna",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-48 sm:h-80",
    description:
      "Vjenčanje u prirodi, svadba u Orionu, dočeci, ispraćaji i još puno lijepih trenutaka iza nas. 🤍Još jedan vikend iza nas",
    imageCount: 14,
  },
  {
    id: "white-green-elegance",
    folderName: "White & Green Elegance with Calla Lilies",
    title: "White & Green Elegance with Calla Lilies",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-48 sm:h-80",
    description:
      "Vajb koji nas je na trenutak odveo do Italije — zelenilo, kamen, grožđe i kale kao glavni detalji ove dekoracije. 🍇🌿Volimo kada upravo mali detalji naprave najveću razliku.",
    imageCount: 6,
  },
  {
    id: "18i-rodjendan",
    folderName: "18i rodjendan",
    title: "Glamurozni 18. Rođendan",
    category: "rodendani",
    categoryLabel: "Rođendan",
    aspectClass: "h-48 sm:h-80",
    description: "Organski balonski lukovi, neon brojevi i chic stolići za proslavu.",
    imageCount: 6,
  },
  {
    id: "boho-vjencanje",
    folderName: "boho vjencanje",
    title: "Boho Vjenčanje iz Snova",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-60 sm:h-[390px]",
    description:
      "September mood, ali u najljepšim bojama. 🧡🍂 Topli tonovi, prirodni ambijent i svadba koja miriše na miholjsko ljeto. ✨",
    imageCount: 6,
  },
  {
    id: "restoran-zlatnik-vjencanje",
    folderName: "restoran zlatnik vjencanje",
    title: "Less is more.",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-60 sm:h-[390px]",
    description: "Bijela elegancija koja govori sama za sebe. ✨",
    imageCount: 5,
  },
  {
    id: "capry-djevojacka",
    folderName: "capry djevojacka",
    title: "Italian vibes & bride-to-be! 🍋",
    category: "djevojacke",
    categoryLabel: "Djevojačka",
    aspectClass: "h-44 sm:h-72",
    description:
      "Djevojačko veče inspirisano najljepšim bojama Italije — limuni, plavi detalji i puno dobre energije. 🇮🇹✨",
    imageCount: 5,
  },
  {
    id: "dream-white-wedding",
    folderName: "dream white wedding",
    title: "Dream White Vjenčanje",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-64 sm:h-[440px]",
    description:
      "Savršena kombinacija za ambijent sale i jedna od onih dekoracija koje jednostavno sve povežu u cjelinu. Mislim da mladenka nije mogla izabrati bolju kombinaciju. 🤍",
    imageCount: 6,
  },
  {
    id: "zaruke-ljiljan",
    folderName: "zaruke ljiljan",
    title: "Romantične Zaruke Ljiljan",
    category: "zaruke",
    categoryLabel: "Zaruke",
    aspectClass: "h-52 sm:h-80",
    description:
      "Rekla je DA! 🤍 Danas smo na Spomen-obilježju „Ljiljan“ imali jednu od najemotivnijih prosidbi koje smo do sada radili. 🥹🤍 Iznenađenje je uspjelo – ostala je potpuno zatečena i oduševljena. Elegantne boje, nježni detalji i cvijet ljiljana savršeno su se uklopili u ovaj ambijent. 🤍 Ako i vi imate posebnu osobu kojoj želite prirediti iznenađenje, tu smo da zajedno osmislimo trenutak koji će pamtiti zauvijek. ✨",
    imageCount: 5,
  },
  {
    id: "docek-kod-mlade",
    folderName: "docek kod mlade",
    title: "Svečani Doček kod Mlade",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-44 sm:h-72",
    description:
      "Boho Colours 🌾 Za divnu Lejlu ovog puta radili smo boho dekoraciju u toplim, prirodnim tonovima – za ispraćaj kući i salu. 🤍",
    imageCount: 5,
  },
  {
    id: "fairy-piknik",
    folderName: "fairy piknik",
    title: "Fairy Bajkoviti Piknik",
    category: "djevojacke",
    categoryLabel: "Djevojačka / Piknik",
    aspectClass: "h-56 sm:h-[380px]",
    description: "Niski drveni stolovi, jastuci, tkani ćilimi i ugođaj u prirodi.",
    imageCount: 6,
  },
  {
    id: "sajam kicenje",
    folderName: "sajam kicenje",
    title: "💛 Dobro došli na 53. Gradačački sajam šljive! 💛",
    category: "manifestacije",
    categoryLabel: "Manifestacija",
    aspectClass: "h-56 sm:h-[380px]",
    description: "Veliko nam je zadovoljstvo što i ove godine imamo priliku biti dio ove tradicionalne manifestacije i urediti binu za svečano otvaranje Sajma, kao i prostor za svečani čin presijecanja vrpce. ✨ Godinama zajedno čuvamo tradiciju da naš Gradačac u dane Sajma zasija u posebnom ruhu. 💙",
    imageCount: 7,
  },
  {
    id: "flowers-and-baloons-birthday",
    folderName: "flowers and baloons birthday",
    title: "Flowers & Balloons Proslava",
    category: "rodendani",
    categoryLabel: "Rođendan",
    aspectClass: "h-52 sm:h-80",
    description: "Kombinacija svježeg cvijeća i pastelnih balona za pamćenje.",
    imageCount: 5,
  },
  {
    id: "rose-green-wedding",
    folderName: "rose&green wedding",
    title: "Rose & Green Vjenčana Bajka",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-64 sm:h-[420px]",
    description: "Bujni eukaliptus, zelene girlande i nježne puder-roze ruže.",
    imageCount: 9,
  },
  {
    id: "ladybug-birthday",
    folderName: "ladybug birthday",
    title: "🐞❤️ Ladybug Birthday ❤️🐞",
    category: "rodendani",
    categoryLabel: "Rođendan",
    aspectClass: "h-44 sm:h-72",
    description: "Za preslatku Hannu kreirali smo mali svijet bubamara🐞✨",
    imageCount: 5,
  },
  {
    id: "cherry rodjendan",
    folderName: "cherry rodjendan",
    title: "🍒 She’s the cherry on top.",
    category: "rodendani",
    categoryLabel: "Rođendan",
    aspectClass: "h-44 sm:h-72",
    description: "Za 18. rođendan koje će se dugo prepričavati. ",
    imageCount: 3,
  },
  {
    id: "wedding-jessica",
    folderName: "wedding jessica",
    title: "Svečani Oltar Jessica",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-64 sm:h-[440px]",
    description: "Za Jessicu, s puno ljubavi. 🩷 Iako ne govori naš jezik, ideje i malo mašte bili su sasvim dovoljni da zajedno ostvarimo njene želje. ✨",
    imageCount: 6,
  },
  {
    id: "green and white wedding",
    folderName: "green and white wedding",
    title: "Green & White Wedding 🤍🌿",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-64 sm:h-[440px]",
    description: "Jednostavno i elegantno. Dekoracija koja se savršeno uklapa u prirodni ambijent jezera Hazna. ✨ Za naše postavke koristimo isključivo kvalitetno umjetno cvijeće, kako bi svaki detalj izgledao besprijekorno.",
    imageCount: 9,
  },
  {
    id: "baby blue dream wedding",
    folderName: "baby blue dream wedding",
    title: "Baby Blue Dream Wedding 🤍",
    category: "vjencanja",
    categoryLabel: "Vjenčanje",
    aspectClass: "h-64 sm:h-[440px]",
    description: "Draperije sa puno materijala su jedan od hitova ove sezone. ✨ Bijela boja uz nježne plave detalje savršeno je upotpunila mjesto za slikanje ovog filmskog vjenčanja u dvorištu. 🤍",
    imageCount: 6,
  },
  {
    id: "special-theme-rodjendan",
    folderName: "special theme rodjendan",
    title: "Special Theme Rođendan",
    category: "rodendani",
    categoryLabel: "Rođendan",
    aspectClass: "h-48 sm:h-72",
    description: "Hello, 18! 🖤 Tamnije boje, dekoracija koja je ostavila baš snažan utisak. ✨",
    imageCount: 5,
  },
  {
    id: "medo-rodjendan",
    folderName: "medo rodjendan",
    title: "Tematski rođendan u znaku Mede",
    category: "rodendani",
    categoryLabel: "Rođendan",
    aspectClass: "h-48 sm:h-72",
    description:
      "Za preslatkog dječaka radili smo tematski rođendan u znaku Mede 🧸 Sretan prvi rođendan slavljeniku 🎂",
    imageCount: 2,
  },
  {
    id: "zaruke-red",
    folderName: "zaruke red",
    title: "Red Passion Zaruke",
    category: "zaruke",
    categoryLabel: "Zaruke",
    aspectClass: "h-56 sm:h-[380px]",
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
    { id: "manifestacije", label: "Manifestacije" },
  ];

  const getProjectImages = (proj: GalleryProject): string[] => {
    const list = [`/galerija/${proj.folderName}/cover.jpg`];
    for (let i = 1; i <= proj.imageCount; i++) {
      list.push(`/galerija/${proj.folderName}/${i}.jpg`);
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
    <section id="galerija" className="py-20 sm:py-32 bg-[#FDFBF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Naslov sekcije */}
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6D5B8]/40 border border-[#C86D51]/30 text-[#C86D51] text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Pinterest Galerija Radova
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#2A2421]">
            Trenuci pretvoreni u bajku
          </h2>
          <p className="text-xs sm:text-base text-[#786F6A]">
            Pregledajte naše dosadašnje postavke. Dodirnite fotografiju za otvaranje detaljne mini-galerije događaja.
          </p>
        </div>

        {/* Filter dugmad */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAll(false);
              }}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#C86D51] text-white shadow-md shadow-[#C86D51]/20 scale-105"
                  : "bg-[#F7F3EE] text-[#786F6A] hover:bg-[#E6D5B8]/50 hover:text-[#2A2421]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-3 sm:gap-6 space-y-3 sm:space-y-6">
          {visibleProjects.map((proj, index) => {
            const coverSrc = `/galerija/${proj.folderName}/cover.jpg`;
            const totalPhotos = proj.imageCount + 1;

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => openProject(proj)}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl sm:rounded-[28px] bg-[#FAF6F0] border border-[#E6D5B8]/60 shadow-sm hover:shadow-2xl transition-all duration-300 mb-3 sm:mb-6"
              >
                <div className={`relative w-full ${proj.aspectClass} overflow-hidden`}>
                  <Image
                    src={coverSrc}
                    alt={proj.title}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Bedž s brojem fotografija */}
                  <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1 border border-white/20">
                    <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>{totalPhotos}</span>
                  </div>

                  {/* Desktop Hover Overlay */}
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-[#2A2421]/90 via-[#2A2421]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-6 text-white">
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

                {/* Mobilni naslov */}
                <div className="p-2 sm:hidden bg-[#FDFBF5] border-t border-[#E6D5B8]/30">
                  <p className="text-[9px] uppercase tracking-wider text-[#C86D51] font-semibold truncate">
                    {proj.categoryLabel}
                  </p>
                  <h4 className="font-serif text-xs text-[#2A2421] font-medium truncate">
                    {proj.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dugme za prikaz više / manje radova */}
        {filteredProjects.length > INITIAL_VISIBLE_COUNT && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-[#FAF6F0] hover:bg-[#E6D5B8]/40 border border-[#C86D51]/40 text-[#2A2421] text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
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
            className="fixed inset-0 z-50 bg-[#2A2421]/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-5 h-[100dvh]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Gornja traka: Naslov i Dugme Zatvori */}
            <div className="flex items-center justify-between z-30 max-w-6xl w-full mx-auto flex-shrink-0 py-1">
              <div className="pr-4 truncate">
                <span className="text-[10px] sm:text-xs text-[#E6D5B8] uppercase tracking-wider font-medium">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="font-serif text-base sm:text-2xl text-white truncate">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeProject}
                className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0"
                aria-label="Zatvori galeriju"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Središnji prikaz slike */}
            <div className="relative flex-1 min-h-0 w-full max-w-5xl mx-auto flex items-center justify-center my-1 sm:my-2">
              {currentImages.length > 1 && (
                <button
                  onClick={prevImage}
                  className="hidden sm:flex absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/15 backdrop-blur-sm transition-all"
                  aria-label="Prethodna slika"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentImages[currentImageIndex]}
                      alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 85vw"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {currentImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="hidden sm:flex absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/15 backdrop-blur-sm transition-all"
                  aria-label="Sljedeća slika"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Donja zona: Kompaktni opis sa skrolom i thumbnail traka */}
            <div className="max-w-3xl w-full mx-auto space-y-2 z-30 flex-shrink-0 pb-1">
              <div className="flex items-start justify-between gap-3 text-xs bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 max-h-20 sm:max-h-24 overflow-y-auto">
                <p className="leading-snug text-[#FDFBF5]/90 text-[12px] sm:text-xs font-light break-words flex-1">
                  {selectedProject.description}
                </p>
                <span className="font-medium text-[11px] sm:text-xs px-2.5 py-0.5 rounded-md bg-white/15 text-white border border-white/10 flex-shrink-0 mt-0.5">
                  {currentImageIndex + 1} / {currentImages.length}
                </span>
              </div>

              {/* Thumbnails traka */}
              {currentImages.length > 1 && (
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto py-1">
                  {currentImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 transition-all ${
                        currentImageIndex === idx
                          ? "ring-2 ring-[#C86D51] scale-105 opacity-100"
                          : "opacity-40 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={img}
                        alt="thumbnail"
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}