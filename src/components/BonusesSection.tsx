import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    title: "Expediente Pro: Fichas de Evaluación y Consentimiento Clínico",
    desc: "Anamnesis, mapa de hallazgos y consentimiento informado, listos para imprimir.",
    value: "ARS 34.990",
    image: "bono1.webp",
  },
  {
    num: 2,
    title: "Protocolo de Seguridad: Guía Maestra de Contraindicaciones",
    desc: "Embarazo, diabetes avanzada y patologías oncológicas: qué no tratar y cuándo derivar.",
    value: "ARS 24.990",
    image: "bono2.webp",
  },
  {
    num: 3,
    title: "Script de Venta: De Masajista a Especialista",
    desc: "Guiones para WhatsApp, Instagram y consulta presencial, listos para usar.",
    value: "ARS 39.990",
    image: "bono3.webp",
  },
  {
    num: 4,
    title: "Ergonomía Terapéutica: Protegé tus Manos y tu Carrera",
    desc: "Posturas, uso de nudillos y ejercicios para prevenir tendinitis y túnel carpiano.",
    value: "ARS 24.990",
    image: "bono4.webp",
  },
  {
    num: 5,
    title: "Reflexología para Casos Especiales: Embarazo, Adultos Mayores y Pacientes con Patología Crónica",
    desc: "Cómo adaptar el protocolo para embarazadas, adultos mayores y pacientes con patología crónica, con checklist de evaluación previa por perfil.",
    value: "ARS 27.990",
    image: "bono5.webp",
  },
];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-brand-dark" id="bonos">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-3">
            Bonos incluidos — sin costo extra
          </span>
          <h2 className="font-heading font-black text-white text-3xl md:text-5xl leading-tight">
            Es un sistema completo.
          </h2>
        </div>

        <div className="space-y-5">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-6 items-center transition-all duration-300 hover:border-brand-teal/40"
            >
              <div className="flex-shrink-0 relative">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={192}
                  height={192}
                  loading="lazy"
                  decoding="async"
                  className="w-44 h-44 md:w-48 md:h-48 object-cover rounded-xl border border-brand-border"
                />
                <span className="absolute -top-2 -left-2 inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-teal/30 bg-brand-dark text-brand-teal shadow-lg">
                  Bono #{b.num}
                </span>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-white font-bold text-sm mb-1">{b.title}</h3>
                <p className="text-brand-gray text-xs leading-relaxed">
                  {b.desc}
                </p>
              </div>

              <div className="flex-shrink-0 text-center md:text-right">
                <p className="text-brand-gray line-through text-sm">
                  {b.value}
                </p>
                <p className="text-brand-teal font-black text-lg">GRATIS</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
