import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "6", label: "Módulos" },
  { value: "12", label: "Protocolos" },
  { value: "180+", label: "Páginas" },
  { value: "4", label: "Bonos" },
];

const modules = [
  "Módulo 1 — Fundamentos y Anatomía Aplicada",
  "Módulo 2 — Mapa de Puntos y Zonas Reflejas",
  "Módulo 3 — Protocolos Clínicos por Patología",
  "Módulo 4 — Evaluación y Documentación Clínica",
  "Módulo 5 — Seguridad y Contraindicaciones",
  "Módulo 6 — Posicionamiento y Ventas Profesionales",
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-3">
            Una guía completa, organizada y aplicable
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white">
            Los 6 módulos del sistema
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-10 max-w-lg mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-brand-card border border-brand-border rounded-xl py-4"
            >
              <div className="text-brand-teal font-black text-2xl md:text-3xl">
                {s.value}
              </div>
              <div className="text-brand-gray text-[10px] md:text-xs uppercase tracking-wide mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <ul className="space-y-3 max-w-xl mx-auto">
          {modules.map((m, i) => (
            <motion.li
              key={m}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3 bg-brand-card border border-brand-border rounded-xl px-4 py-3"
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-teal" />
              <span className="text-brand-text leading-relaxed">{m}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
