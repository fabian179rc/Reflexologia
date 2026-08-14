import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen, CheckCircle2 } from 'lucide-react';

const temas = [
  { emoji: '🦶', label: 'Mapa de Zonas Reflejas' },
  { emoji: '🧬', label: 'Anatomía Aplicada' },
  { emoji: '📋', label: 'Fichas de Evaluación' },
  { emoji: '⚠️', label: 'Contraindicaciones' },
  { emoji: '🩺', label: 'Protocolos por Patología' },
  { emoji: '💼', label: 'Script de Venta' },
  { emoji: '✍️', label: 'Consentimiento Informado' },
  { emoji: '🖐️', label: 'Ergonomía Terapéutica' },
];

const respaldo = [
  { emoji: '🔬', label: 'Anatomía y fisiología real' },
  { emoji: '🚫', label: 'Sin opinión de internet' },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-bold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4" />
            Esto es lo que recibís por dentro
          </span>
          <h2 className="font-heading font-black text-white text-3xl md:text-5xl leading-tight mb-4">
            REFLEXOLOGÍA EN LA{' '}
            <span className="text-brand-teal">PRÁCTICA CLÍNICA</span>
          </h2>
          <p className="text-lg md:text-xl font-bold text-brand-gray max-w-2xl mx-auto">
            Un sistema completo para organizar y profesionalizar tu aplicación
            de reflexología desde el primer paciente.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] border border-brand-teal/20 shadow-[0_20px_60px_rgba(0,212,170,0.1)] mb-8 max-w-lg mx-auto"
        >
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${import.meta.env.BASE_URL}protocolo-glp1-mockup.webp`}
            />
            <img
              src={`${import.meta.env.BASE_URL}protocolo-glp1-mockup-mobile.webp`}
              alt="Sistema Maestro de Reflexología para Profesionales — vista previa"
              width={1254}
              height={1254}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-xl"
            />
          </picture>
        </motion.div>

        <div className="mb-8">
          <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-4 text-center">
            Incluye los bloques más importantes del sistema
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {temas.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-2 sm:gap-2.5 bg-brand-card border border-brand-border rounded-lg sm:rounded-xl px-2.5 py-2 sm:px-4 sm:py-3"
              >
                <span className="text-lg sm:text-xl flex-shrink-0" aria-hidden="true">
                  {t.emoji}
                </span>
                <span className="font-semibold text-brand-text text-xs sm:text-sm md:text-[15px] leading-tight">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-card border border-brand-teal/20 rounded-3xl p-5 md:p-7 text-center"
        >
          <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-5">
            Basado en anatomía aplicada, criterios de seguridad y protocolos estructurados
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {respaldo.map((r, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/30 text-brand-teal rounded-full px-4 py-2 text-sm font-semibold"
              >
                <span aria-hidden="true">{r.emoji}</span>
                {r.label}
              </span>
            ))}
          </div>
          <p className="text-brand-gray text-sm md:text-base leading-relaxed max-w-2xl mx-auto flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
            Contenido estructurado y organizado para que no dependas de información dispersa o contradictoria.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
