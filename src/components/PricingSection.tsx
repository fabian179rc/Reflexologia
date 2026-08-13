import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, CreditCard, ShieldCheck, Lock } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";

const incluye = [
  "6 módulos clínicos completos (180+ páginas)",
  "12 protocolos listos para aplicar",
  "Fichas de evaluación + consentimiento legal",
  "Guía de contraindicaciones y seguridad",
  "Script de venta para llenar tu agenda",
  "Certificado de especialista para tu gabinete",
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-brand-dark pt-12 md:pt-14 pb-0"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-bold tracking-[0.18em] uppercase text-xs animate-pulse">
          ⚡ Precio de lanzamiento — sube sin aviso previo
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          Accedé al sistema ahora y empezá{" "}
          <span className="text-brand-teal">el cambio hoy</span>
        </h2>

        <div className="relative inline-block mb-2 w-full max-w-sm mx-auto">
          <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] border border-brand-teal/20 shadow-[0_20px_60px_rgba(0,212,170,0.15)]">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`${import.meta.env.BASE_URL}protocolo-glp1-mockup.webp`}
              />
              <img
                src={`${import.meta.env.BASE_URL}protocolo-glp1-mockup-mobile.webp`}
                alt="Sistema Maestro de Reflexología Clínica"
                width={1254}
                height={1254}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-xl"
              />
            </picture>
          </div>
        </div>
      </div>

      <div
        id="comprar"
        className="container mx-auto px-4 max-w-md relative z-10 pb-16 mt-6 scroll-mt-6"
      >
        <div className="bg-brand-card border border-brand-border rounded-3xl shadow-2xl shadow-black/30 p-7 md:p-8 text-center">
          <p className="text-brand-gray text-base md:text-lg mb-2">
            Precio regular: <span className="line-through">ARS 234.940</span>
          </p>

          <div className="price-glow font-heading font-black text-brand-teal leading-none mb-2 text-[3.5rem] md:text-7xl">
            ARS 27.990
          </div>
          <p className="text-brand-gray text-sm mb-8">
            Pago único · Acceso de por vida · Sin cuotas · Sin renovaciones
          </p>

          <div className="grid grid-cols-1 gap-2.5 text-left mb-8">
            {incluye.map((item) => (
              <p key={item} className="flex items-start gap-2.5 text-brand-text text-sm">
                <span className="text-brand-teal font-black flex-shrink-0">✓</span>
                {item}
              </p>
            ))}
          </div>

          <motion.a
            href={getCheckoutUrl()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full bg-brand-teal hover:bg-[#00ffcc] text-brand-dark font-black uppercase tracking-widest text-base md:text-lg px-6 py-5 rounded-xl shadow-[0_0_30px_#00d4aa33] transition-all mb-6"
          >
            <span className="flex items-center gap-2 text-center">
              Acceder al Sistema Completo
            </span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </motion.a>

          <div className="grid grid-cols-2 gap-y-3 text-sm text-brand-gray font-semibold">
            <div className="flex items-center justify-center gap-2 pr-2 border-r border-brand-border">
              <Zap className="w-4 h-4 text-brand-teal" />
              Acceso inmediato
            </div>
            <div className="flex items-center justify-center gap-2 pl-2">
              <CreditCard className="w-4 h-4 text-brand-blue" />
              Pago único
            </div>
            <div className="flex items-center justify-center gap-2 pr-2 border-r border-brand-border">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              Garantía de 7 días
            </div>
            <div className="flex items-center justify-center gap-2 pl-2">
              <Lock className="w-4 h-4 text-brand-teal" />
              Pago seguro
            </div>
          </div>

          <p className="text-brand-gray/60 text-xs mt-6 italic">
            ¿Por qué este precio? Es de lanzamiento. A medida que más
            terapeutas accedan y validen el contenido, el precio será
            ajustado.
          </p>
        </div>
      </div>
    </section>
  );
}
