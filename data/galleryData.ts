export type Category = "sve" | "vjencanja" | "zaruke" | "djevojacke" | "rodjendani";

export interface ProjectItem {
  id: number;
  slug: string; // tačan naziv podfoldera u public/galerija/
  title: string;
  category: Category;
  categoryLabel: string;
  description: string;
  coverImage: string;
  images: string[];
}

// Pomoćna funkcija koja automatski spaja cover.jpg i numerisane slike (1.jpg, 2.jpg...)
function createProject(
  id: number,
  slug: string,
  title: string,
  category: Category,
  categoryLabel: string,
  description: string,
  imageCount: number // Koliko ima numerisanih slika (1.jpg, 2.jpg... n.jpg)
): ProjectItem {
  const folderPath = `/galerija/${slug}`;
  const images = [`${folderPath}/cover.jpg`];

  for (let i = 1; i <= imageCount; i++) {
    images.push(`${folderPath}/${i}.jpg`);
  }

  return {
    id,
    slug,
    title,
    category,
    categoryLabel,
    description,
    coverImage: `${folderPath}/cover.jpg`,
    images,
  };
}

export const galleryProjects: ProjectItem[] = [
  // 1 - 4: Vjenčanja
  createProject(
    1,
    "autumn wedding", // Zamijeni sa tačnim nazivom foldera ako je drugačiji
    "autumn wedding",
    "vjencanja",
    "Vjenčanja",
    "Pampas aranžmani, makrame detalji i pletena fotelja na vodi.",
    8 // Znači: cover.jpg + 1.jpg do 4.jpg (ukupno 5 slika)
  ),
  createProject(
    2,
    "boho vjencanje",
    "boho vjencanje",
    "vjencanja",
    "Vjenčanja",
    "Prirodni poluluk sa cvjetnim aranžmanima i lepršavim platnima.",
    8
  ),
  createProject(
    3,
    "dream white wedding",
    "dream white wedding",
    "vjencanja",
    "Vjenčanja",
    "Raskošni slap terakota i zlatnog cvijeća sa svijećnjacima.",
    6
  ),
  createProject(
    4,
    "rose&green wedding",
    "rose&green wedding",
    "vjencanja",
    "Vjenčanja",
    "Štafelaji, personalizovane table dobrodošlice i lampioni.",
    9
  ),

  // 5 - 6: Zaruke
  createProject(
    5,
    "zaruke ljiljan",
    "zaruke ljiljan",
    "zaruke",
    "Zaruke",
    "Intimne zaruke na ljiljanu u Gradaccu.",
    6
  ),
  createProject(
    6,
    "zaruke red",
    "Will You Marry Me Kutak",
    "zaruke",
    "Zaruke",
    "Neon natpis u kombinaciji sa suhim cvijećem i pampasom.",
    3
  ),

  // 7 - 9: Djevojačke Večeri
  createProject(
    7,
    "djevojacko italy theme",
    "Capri Limun Party",
    "djevojacke",
    "Djevojačka Večer",
    "Mediteranski ugođaj uz bazen, pločice majolika i citruse.",
    8
  ),
  createProject(
    8,
    "fairy piknik",
    "Fairy za Kume",
    "djevojacke",
    "Djevojačka Večer",
    "Niski drveni stolovi, ležerni jastuci i elegantna dekoracija čaša.",
    9
  ),
  createProject(
    9,
    "pink-glam-vecer",
    "Rose Gold & Pink Glamur",
    "djevojacke",
    "Djevojačka Večer",
    "Pastelne instalacije balona, šampanjac kutak i foto rekviziti.",
    3
  ),

  // 10 - 12: Rođendani & Jubileji
  createProject(
    10,
    "flowers and baloons birthday",
    "Glamur 18. Rođendana",
    "rodjendani",
    "Rođendani",
    "Organska girlanda balona u berry tonovima uz 3D svijetleće brojeve.",
    8
  ),
  createProject(
    11,
    "ladybug rodjendan",
    "Prvi Rođendan - Lady bug",
    "rodjendani",
    "Rođendani",
    "Zemljani tonovi, plišane figure i balonski luk za najmlađe.",
    4
  ),
  createProject(
    12,
    "special theme rodjendan",
    "Elegantni Jubilej",
    "rodjendani",
    "Rođendani",
    "Crno-zlatna kombinacija sa raskošnim pozadinama za slikanje.",
    3
  ),
  createProject(
    13,
    "18i rodjendan",
    "Elegantni Jubilej",
    "rodjendani",
    "Rođendani",
    "18i rodjendan.",
    4
  ),
];