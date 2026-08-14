import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const sinSistema = [
  "Cursos sueltos y videos gratuitos sin orden ni aplicación clínica",
  "Cero respaldo legal: sin fichas ni consentimiento informado",
  "Meses de prueba y error para armar tus propios protocolos",
  "Tarifa de masaje relax, sin poder subir tu ticket",
];

const conSistema = [
  "Sistema completo y organizado para empezar a implementar desde el primer día.",
  "Fichas de evaluación y modelos de consentimiento informado para documentar tu práctica profesional.",
  "12 protocolos clínicos ya armados por patología",
  "Posicionamiento profesional para salir de la tarifa de relax y justificar un servicio de mayor valor.",
];

export function Comparison() {
  return (
    <section className="py-10 md:py-14 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-3">
            Lo que esto reemplaza{" "}
            <span className="text-brand-teal">y cuánto cuesta no tenerlo</span>
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto">
            La información correcta sale menos cara que malas decisiones y
            protocolos improvisados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card border border-brand-border rounded-2xl p-6"
          >
            <h3 className="text-brand-gray font-bold uppercase tracking-widest text-xs mb-4">
              Sin el sistema
            </h3>
            <ul className="space-y-3">
              {sinSistema.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-gray text-sm leading-relaxed">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-card border border-brand-teal/40 rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,212,170,0.08)]"
          >
            <h3 className="text-brand-teal font-bold uppercase tracking-widest text-xs mb-4">
              Con el Sistema Maestro
            </h3>
            <ul className="space-y-3">
              {conSistema.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-text text-sm leading-relaxed">
                  <Check className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
