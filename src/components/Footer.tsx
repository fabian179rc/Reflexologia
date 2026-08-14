import React from "react";
export function Footer() {
  return (
    <footer className="bg-[#070b12] text-brand-gray py-10 border-t border-brand-border">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6">
          SISTEMA MAESTRO DE REFLEXOLOGÍA PARA PROFESIONALES
        </div>

        <p className="text-xs max-w-2xl mx-auto mb-8 leading-relaxed">
          Este producto es una herramienta informativa y educativa dirigida a
          profesionales de la terapia manual. No constituye asesoramiento
          médico ni reemplaza el criterio clínico ni la derivación a un
          profesional de la salud matriculado. Los resultados pueden variar
          según cada caso.
        </p>

        <div className="text-xs text-brand-gray/70">
          <p>© 2026 Sistema Maestro de Reflexología para Profesionales — Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
