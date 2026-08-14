import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, CreditCard } from "lucide-react";
import { scrollToOffer } from "../utils/scrollToOffer";
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-10 md:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-transparent to-brand-blue/5 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-bold tracking-[0.18em] uppercase text-[10px] md:text-xs"
        >
          Sistema Clínico Profesional · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-black text-white mb-0 text-[26px] leading-[1.15] md:text-5xl md:leading-tight"
        >
          Dejá de Cobrar Tarifa de Relax.{" "}
          <span className="text-brand-teal">
            Empezá a Cobrar como Especialista.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto my-6 w-full max-w-[380px] sm:max-w-md md:max-w-lg"
        >
          <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] border border-brand-teal/20 shadow-[0_20px_60px_rgba(0,212,170,0.15)]">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`${import.meta.env.BASE_URL}protocolo-glp1-mockup.webp`}
              />
              <img
                src={`${import.meta.env.BASE_URL}protocolo-glp1-mockup-mobile.webp`}
                alt="Sistema Maestro de Reflexología para Profesionales"
                width={1254}
                height={1254}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto rounded-xl"
              />
            </picture>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-0 mb-2"
        >
          <p className="text-brand-gray text-[14px] md:text-lg leading-relaxed">
            Protocolos, fichas profesionales y guiones de venta, por menos de lo
            que cobrás en una sesión.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-xl mx-auto mt-4 mb-8 space-y-2 text-left"
        >
          {[
            "Sistema organizado en 6 áreas profesionales, con protocolos aplicados por condición",
            "Fichas de evaluación y consentimiento listos para imprimir",
            "Scripts de venta para presentar tu servicio, convertir más consultas en sesiones y profesionalizar tu seguimiento.",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-brand-text text-sm md:text-base"
            >
              <span className="text-brand-teal font-black flex-shrink-0 mt-0.5">
                ✓
              </span>
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <motion.a
            href="#comprar"
            onClick={scrollToOffer}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto bg-brand-teal hover:bg-[#00ffcc] text-brand-dark font-black uppercase tracking-widest px-6 sm:px-10 py-4 sm:py-5 rounded-lg shadow-[0_0_30px_#00d4aa33] transition-all mb-6 text-[13px] sm:text-lg whitespace-nowrap"
          >
            Quiero el Sistema Completo Ahora
          </motion.a>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-1 sm:gap-x-6 sm:gap-y-3 justify-center items-center text-xs sm:text-sm font-medium text-brand-gray">
            <span className="flex items-center justify-center gap-1 sm:gap-1.5">
              <Star
                className="w-3 h-3 sm:w-4 sm:h-4 fill-brand-teal text-brand-teal"
                aria-hidden="true"
              />
              4.8/5 — +1.200 terapeutas en LATAM
            </span>
            <span className="flex items-center justify-center gap-1 sm:gap-1.5">
              <ShieldCheck
                className="w-3 h-3 sm:w-4 sm:h-4 text-brand-blue"
                aria-hidden="true"
              />
              Garantía de 7 días
            </span>
            <span className="flex items-center justify-center gap-1 sm:gap-1.5">
              <Zap
                className="w-3 h-3 sm:w-4 sm:h-4 text-brand-teal"
                aria-hidden="true"
              />
              Acceso inmediato
            </span>
            <span className="flex items-center justify-center gap-1 sm:gap-1.5">
              <CreditCard
                className="w-3 h-3 sm:w-4 sm:h-4 text-brand-blue"
                aria-hidden="true"
              />
              Pago único
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
