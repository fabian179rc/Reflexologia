import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToOffer } from "../utils/scrollToOffer";

export function FloatingCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [overComprar, setOverComprar] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("comprar");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOverComprar(entry.isIntersecting),
      { rootMargin: "-1px 0px -50% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !overComprar;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
          <div className="pointer-events-auto">
            <a
              href="#comprar"
              onClick={scrollToOffer}
              className="inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-[#00ffcc] text-brand-dark font-black uppercase tracking-widest text-sm px-8 py-4 rounded-lg shadow-2xl shadow-[#00d4aa]/30 border-2 border-white/10 transition-colors"
            >
              ¡Quiero el Sistema Ya!
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
