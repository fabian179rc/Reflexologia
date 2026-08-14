import React from "react";
import { motion } from "framer-motion";
import { Sprout, TrendingUp, Building2 } from "lucide-react";

const profiles = [
  {
    icon: Sprout,
    title: "La Terapeuta que Empieza",
    desc: "Salís de tu formación con la técnica en las manos pero sin protocolos clínicos definidos. Necesitás un sistema, no otro curso suelto.",
  },
  {
    icon: TrendingUp,
    title: "El Profesional con Experiencia",
    desc: "Ya dominás la técnica. Te falta la documentación y el posicionamiento clínico para dejar de cobrar tarifa de relax y subir tu ticket.",
  },
  {
    icon: Building2,
    title: "El Dueño de Gabinete",
    desc: "Querés sumar Reflexología Clínica como servicio premium en tu equipo, sin capacitar desde cero a cada terapeuta nuevo.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-10 md:py-14 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-3">
            La solución — sistema todo en uno
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-4 max-w-3xl mx-auto">
            No importa tu nivel: este sistema te lleva al{" "}
            <span className="text-brand-teal">siguiente</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-2 sm:gap-5">
          {profiles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card border border-brand-border rounded-lg sm:rounded-2xl p-2.5 sm:p-6 text-left"
            >
              <div className="flex items-center gap-2 mb-1.5 sm:block sm:mb-4">
                <p.icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-teal" />
                <h3 className="text-white font-bold text-base sm:text-lg sm:mb-2">{p.title}</h3>
              </div>
              <p className="text-brand-gray leading-relaxed text-xs sm:text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
