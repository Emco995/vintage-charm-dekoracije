"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface IntroSplashProps {
  onComplete?: () => void;
}

export default function IntroSplash({ onComplete }: IntroSplashProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Nakon 3 sekunde pokreće se kompletan exit ciklus
    const timer = setTimeout(() => {
      setShowSplash(false);
      if (onComplete) onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {showSplash && (
        <motion.div
          key="splash-curtain"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.0,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.9, // Zavjesa se diže tek nakon što se logo zavrti za 360 i nestane
            },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDFBF5] select-none overflow-hidden"
        >
          {/* Suptilna pozadina usklađena sa slikom */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,242,233,0.9)_0%,#FDFBF5_75%)] pointer-events-none" />

          {/* Kontejner loga sa garantovanom 360 rotacijom */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{
              scale: 0.001,
              rotate: 360,
              transition: {
                duration: 1.1,
                ease: [0.45, 0, 0.15, 1], // Jasno vidljivo ubrzanje i okret
              },
            }}
            style={{ transformOrigin: "center center" }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Prikaz slike loga */}
            <div className="relative w-80 h-96 sm:w-96 sm:h-[460px] flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Vintage Charm Dekoracije"
                fill
                sizes="(max-width: 768px) 320px, 384px"
                priority
                className="object-contain"
              />
            </div>

            {/* Suptilan natpis ispod loga koji bledi prije rotacije */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-3 flex flex-col items-center gap-1.5"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C86D51]/50" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#C86D51] font-semibold">
                  Atelier
                </span>
                <span className="w-8 h-[1px] bg-[#C86D51]/50" />
              </div>
              <p className="font-serif italic text-sm tracking-widest text-[#786F6A]">
                Čarolija trenutka u svakom detalju
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}