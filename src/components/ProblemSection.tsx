import React from 'react';
import { motion } from 'framer-motion';
const situations = [
  {
    emoji: '🌀',
    title: 'Información Dispersa',
    desc: 'Buscás en YouTube, grupos de Facebook y cursos sueltos, y encontrás versiones contradictorias de todo. Ningún lugar te da el mapa completo.',
  },
  {
    emoji: '📄',
    title: 'Cero Respaldo Documental',
    desc: 'Sin fichas de evaluación ni consentimiento informado, cada sesión queda librada a la memoria. Te expone frente a cualquier reclamo.',
  },
  {
    emoji: '💸',
    title: 'Tarifa de Relax',
    desc: 'Cobrás lo mismo que un masaje descontracturante porque nada en tu presentación te posiciona como especialista clínico.',
  },
  {
    emoji: '🎓',
    title: 'La Técnica sin el Protocolo',
    desc: 'Aprendiste los puntos reflejos, pero nadie te enseñó cómo aplicarlos en secuencia según cada patología del paciente que tenés enfrente.',
  },
];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-4 text-white">
            ¿Buscás información?{' '}
            <span className="text-brand-teal">Encontrás confusión.</span>
          </h2>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Si ejercés Reflexología, probablemente vivís alguna de estas
            situaciones:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-2 sm:gap-6">
          {situations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card border border-brand-border rounded-lg sm:rounded-2xl p-2.5 sm:p-6 transition-all duration-300 hover:border-brand-teal/40"
            >
              <div className="flex items-center gap-2 mb-1.5 sm:block sm:mb-3">
                <span className="text-2xl sm:text-3xl">{item.emoji}</span>
                <h3 className="text-base sm:text-lg font-bold text-white sm:mb-2">{item.title}</h3>
              </div>
              <p className="text-brand-gray leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
