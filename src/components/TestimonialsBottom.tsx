import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
  {
    initial: 'C',
    color: 'bg-brand-teal/15 text-brand-teal',
    name: 'Carla R.',
    location: 'Buenos Aires · Terapeuta certificada',
    text: 'Tenía la técnica pero improvisaba cada sesión. Con los protocolos por patología dejé de dudar y mis pacientes lo notaron desde la primera consulta.',
  },
  {
    initial: 'M',
    color: 'bg-brand-blue/15 text-brand-blue',
    name: 'Martín S.',
    location: 'Córdoba · Dueño de gabinete',
    text: 'Las fichas de evaluación cambiaron cómo me perciben mis pacientes. Pasé de cobrar tarifa de relax a armar paquetes de sesiones clínicas.',
  },
  {
    initial: 'R',
    color: 'bg-emerald-500/15 text-emerald-400',
    name: 'Romina M.',
    location: 'Lima · Terapeuta independiente',
    text: 'El script de venta me sacó la incomodidad de ofrecer el servicio nuevo. Llené mi agenda del mes en dos semanas.',
  },
];

export function TestimonialsBottom() {
  return (
    <section className="py-10 md:py-14 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-brand-teal mb-3" />
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-bold tracking-[0.18em] uppercase text-xs">
            Lo que otros ya están viviendo
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-3">
            Lo que dicen los terapeutas que ya tienen el sistema
          </h2>
          <p className="text-brand-gray text-sm md:text-base">
            ⭐ 4.9/5 — +1.200 terapeutas en LATAM · México · Colombia ·
            Argentina · Chile
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-5 flex flex-col h-full"
            >
              <div className="flex text-brand-teal mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              <p className="text-brand-text text-[15px] leading-relaxed mb-4 italic flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-brand-border pt-3 mt-auto">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${t.color} mr-3 flex-shrink-0`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-brand-gray">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
