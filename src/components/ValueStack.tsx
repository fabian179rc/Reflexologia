import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, HeartHandshake, CalendarCheck, TrendingUp } from "lucide-react";

const changes = [
  {
    icon: BadgeCheck,
    title: "Presencia Clínica",
    desc: "Fichas, protocolos y certificado que te muestran como especialista desde el primer minuto.",
  },
  {
    icon: HeartHandshake,
    title: "Confianza del Paciente",
    desc: "Consentimiento informado y evaluación documentada: menos dudas, más pacientes que vuelven.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda Llena",
    desc: "Scripts de venta listos para ofrecer el servicio sin incomodidad, en WhatsApp e Instagram.",
  },
  {
    icon: TrendingUp,
    title: "Ingresos por Sesión",
    desc: "Paquetes de sesiones armados con protocolos claros, para dejar de cobrar tarifa de relax.",
  },
];

export function ValueStack() {
  return (
    <section className="py-10 md:py-14 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white">
            Lo que cambia cuando organizás{" "}
            <span className="text-brand-teal">tu aplicación</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {changes.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-5 text-center"
            >
              <c.icon className="w-7 h-7 text-brand-teal mx-auto mb-3" />
              <h3 className="text-white font-bold text-sm md:text-base mb-1.5">
                {c.title}
              </h3>
              <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
