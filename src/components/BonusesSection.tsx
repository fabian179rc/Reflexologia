import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
const bonuses = [
  {
    num: 1,
    title: "Expediente Pro: Fichas de Evaluación y Consentimiento Clínico",
    desc: "Formularios listos para imprimir. Anamnesis, mapa de hallazgos y consentimiento informado para tu protección legal. Cuando tu paciente llena esta ficha, te percibe como clínico, no como masajista.",
    value: "ARS 34.990",
    image: "bono1.webp",
  },
  {
    num: 2,
    title: "Protocolo de Seguridad: Guía Maestra de Contraindicaciones",
    desc: "Qué casos no tratar y cómo protegerte legalmente. Embarazo, diabetes avanzada, patologías oncológicas. Señales de derivación médica urgente.",
    value: "ARS 24.990",
    image: "bono2.webp",
  },
  {
    num: 3,
    title: "Script de Venta: De Masajista a Especialista",
    desc: "Guiones exactos para WhatsApp, Instagram y consulta presencial. Cómo ofrecer el nuevo servicio sin incomodidad y armar paquetes de sesiones.",
    value: "ARS 39.990",
    image: "bono3.webp",
  },
  {
    num: 4,
    title: "Ergonomía Terapéutica: Protegé tus Manos y tu Carrera",
    desc: "Posturas correctas, uso de nudillos y ejercicios de descarga post-jornada. Señales tempranas de tendinitis y túnel carpiano.",
    value: "ARS 24.990",
    image: "bono4.webp",
  },
  {
    num: 5,
    title: "Certificado de Especialista en Reflexología Aplicada",
    desc: "Plantilla de diploma profesional lista para personalizar e imprimir en A4. Diseñado para colgar en tu gabinete y generar confianza visual.",
    value: "ARS 19.990",
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
            No es solo el Atlas.
            <br />
            <span className="text-brand-teal">Es un sistema completo.</span>
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
              <div className="flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
                  className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-xl border border-brand-border"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal mb-2">
                  Bono #{b.num}
                </span>
                <h3 className="text-white font-bold text-lg mb-1">{b.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{b.desc}</p>
              </div>

              <div className="flex-shrink-0 text-center md:text-right">
                <p className="text-brand-gray line-through text-sm">{b.value}</p>
                <p className="text-brand-teal font-black text-lg">GRATIS</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center px-6 py-10 mt-10 bg-brand-card border border-brand-teal/20 rounded-3xl">
          <Gift className="w-9 h-9 text-brand-teal mx-auto mb-4" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-teal mb-2">
            Todo incluido en
          </p>
          <h3 className="font-heading font-bold text-white text-3xl md:text-4xl mb-3">
            el Sistema Maestro de Reflexología Clínica
          </h3>
          <p className="text-brand-gray">
            Los 5 bonos son gratis con tu compra hoy.
          </p>
        </div>
      </div>
    </section>
  );
}
