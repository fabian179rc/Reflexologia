import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Zap, CreditCard } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
export function FinalPricingCTA() {
  return (
    <section className="py-10 md:py-14 bg-brand-dark text-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-brand-teal/10 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="mb-5">
          <span className="inline-block px-6 py-2.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-bold tracking-[0.18em] uppercase text-xs">
            Última Oportunidad
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black font-heading text-white mb-5 leading-tight">
          Tu próxima sesión merece que te{" "}
          <span className="text-brand-teal">paguen como especialista</span>.
        </h2>
        <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
          El sistema completo. Más protocolos claros y menos tiempo perdido
          improvisando en consulta.
        </p>

        <div className="bg-brand-card border border-brand-border rounded-3xl p-6 md:p-7 max-w-xl mx-auto mb-6">
          <h3 className="font-bold text-white mb-2 text-lg md:text-xl">
            Sistema Maestro de Reflexología para Profesionales + 4 Bonos GRATIS
          </h3>
          <div className="text-brand-gray line-through mb-2">ARS 234.940</div>
          <div className="text-4xl font-black text-brand-teal mb-6">
            ARS 27.990
          </div>
          <motion.a
            href={getCheckoutUrl()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 md:gap-3 w-full bg-brand-teal hover:bg-[#00ffcc] text-brand-dark font-black uppercase tracking-widest text-[13px] md:text-lg px-4 py-3.5 md:px-6 md:py-5 rounded-xl shadow-[0_0_30px_#00d4aa33] transition-all mb-4"
          >
            <span className="text-center">
              Sí, quiero mi sistema completo hoy
            </span>
            <ArrowRight className="w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-2.5 sm:gap-x-6 sm:gap-y-3 justify-center items-center text-sm text-brand-gray font-medium">
          <span className="flex items-center justify-center gap-1.5">
            <Star
              className="w-4 h-4 fill-brand-teal text-brand-teal"
              aria-hidden="true"
            />
            4.8/5 — Reseñas verificadas
          </span>
          <span className="flex items-center justify-center gap-1.5">
            <ShieldCheck
              className="w-4 h-4 text-brand-blue"
              aria-hidden="true"
            />
            Garantía de 7 Días
          </span>
          <span className="flex items-center justify-center gap-1.5">
            <Zap className="w-4 h-4 text-brand-teal" aria-hidden="true" />
            Acceso inmediato
          </span>
          <span className="flex items-center justify-center gap-1.5">
            <CreditCard
              className="w-4 h-4 text-brand-blue"
              aria-hidden="true"
            />
            Pago único
          </span>
        </div>
      </div>
    </section>
  );
}
