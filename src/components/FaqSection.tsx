import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
const faqs = [
  {
    q: "¿Sirve si ya soy terapeuta con años de experiencia?",
    a: "Especialmente para vos. El sistema no empieza desde cero — asume que ya tenés la base técnica y te da los protocolos clínicos, la documentación y las herramientas de posicionamiento que faltaban para subir tu ticket.",
  },
  {
    q: "¿Es contenido técnico o básico?",
    a: "Técnico y aplicado. Cada protocolo incluye anatomía de referencia, secuencia exacta de puntos, técnica de presión (tonificación vs. dispersión) y frecuencia de sesión recomendada por patología.",
  },
  {
    q: "¿Necesito comprar equipos o materiales especiales?",
    a: "No. Todo el sistema se aplica con tus manos. No hay inversión en equipos, aparatología ni insumos especiales de ningún tipo.",
  },
  {
    q: "¿Reemplaza la formación médica?",
    a: "No. Este material es educativo y profesional, diseñado como complemento de tu formación existente. No reemplaza el criterio clínico ni la derivación médica cuando corresponde.",
  },
  {
    q: "¿Cómo recibo el material después de comprar?",
    a: "Acceso inmediato por email después del pago. Descarga directa en PDF. Podés tenerlo en tu celular, tablet o computadora en menos de 5 minutos.",
  },
  {
    q: "¿Puedo pedir reembolso?",
    a: "Sí. Garantía incondicional de 7 días. Si no estás satisfecho por cualquier motivo, te devolvemos el 100% de tu inversión sin preguntas ni formularios.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-10 md:py-14 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-bold tracking-[0.18em] uppercase text-xs">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight">
            Respondemos <span className="text-brand-teal">tus preguntas</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-brand-card border border-brand-border rounded-2xl"
              >
                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-white text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal flex items-center justify-center transition-colors"
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-brand-gray leading-relaxed text-[15px] md:text-base max-w-[58ch]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href={getCheckoutUrl()}
            className="inline-block bg-brand-teal hover:bg-[#00ffcc] text-brand-dark font-black uppercase tracking-widest px-8 py-4 rounded-lg shadow-[0_0_30px_#00d4aa33] transition-all"
          >
            Acceder ahora por ARS 19.990
          </a>
        </div>
      </div>
    </section>
  );
}
