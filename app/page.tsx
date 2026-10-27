// "use client";

// import { useEffect } from "react";
// import IntroSplash from "@/components/IntroSplash";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Gallery from "@/components/Gallery";
// import Services from "@/components/Services";
// import Testimonials from "@/components/Testimonials";
// import FAQ from "@/components/FAQ";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// export default function Home() {
//   useEffect(() => {
//     document.title = "Vintage Charm Dekoracije | Boho & Event Dekoracije";
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#FDFBF5] text-[#2A2421] selection:bg-[#E6D5B8] selection:text-[#2A2421]">
//       <IntroSplash />
//       <Navbar />
//       <Hero />
//       <About />
//       <Gallery />
//       <Services />
//       <Testimonials />
//       <FAQ />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

"use client";

import { useEffect } from "react";
import IntroSplash from "@/components/IntroSplash";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Vintage Charm Dekoracije | Boho & Event Dekoracije";
  }, []);

  return (
    <main className="min-h-screen bg-[#FDFBF5] text-[#2A2421] selection:bg-[#E6D5B8] selection:text-[#2A2421]">
      <IntroSplash />
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="gallery">
        <Gallery />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}