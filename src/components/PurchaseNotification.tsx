import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PRODUCT_NAME = "Sistema Maestro de Reflexología Clínica";
const PRODUCT_NAME_SHORT = "Sistema de Reflexología";

const NOTIFICATIONS = [
  { name: "Paola V.", city: "San José", minutesAgo: 27 },
  { name: "Martín G.", city: "Ciudad de México", minutesAgo: 12 },
  { name: "Lucía F.", city: "Bogotá", minutesAgo: 41 },
  { name: "Diego R.", city: "Lima", minutesAgo: 8 },
  { name: "Carla M.", city: "Santiago", minutesAgo: 33 },
  { name: "Sergio N.", city: "Buenos Aires", minutesAgo: 19 },
];

export function PurchaseNotification() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (visible) {
      timer = setTimeout(() => setVisible(false), 6000);
    } else if (!startedRef.current) {
      startedRef.current = true;
      timer = setTimeout(() => setVisible(true), 4000);
    } else {
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 9000);
    }
    return () => clearTimeout(timer);
  }, [visible]);

  const current = NOTIFICATIONS[index];

  return (
    <div className="fixed bottom-4 md:bottom-6 left-4 z-40 pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto bg-brand-card rounded-lg sm:rounded-2xl shadow-2xl shadow-black/40 border border-brand-border p-1.5 sm:p-4 w-32 sm:w-[calc(100vw-2rem)] sm:max-w-80"
          >
            <div className="flex items-center justify-between mb-0.5 sm:mb-2">
              <span className="inline-flex items-center gap-0.5 sm:gap-1.5 text-brand-teal font-bold text-[6px] sm:text-xs tracking-wide uppercase">
                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-brand-teal" />
                Compra verificada
              </span>
              <button
                type="button"
                onClick={() => setVisible(false)}
                aria-label="Cerrar notificación"
                className="text-brand-gray hover:text-white transition-colors"
              >
                <X className="w-2 h-2 sm:w-4 sm:h-4" />
              </button>
            </div>
            <p className="text-white font-bold text-[9px] sm:text-sm mb-0.5 truncate">
              {current.name} de {current.city}
            </p>
            <p className="text-brand-gray text-[9px] sm:text-sm leading-snug">
              compró{" "}
              <span className="text-brand-teal font-semibold">
                <span className="sm:hidden">{PRODUCT_NAME_SHORT}</span>
                <span className="hidden sm:inline">{PRODUCT_NAME}</span>
              </span>
            </p>
            <p className="text-brand-gray/60 text-[7px] sm:text-xs mt-0.5 sm:mt-1.5">
              hace {current.minutesAgo} minutos
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
