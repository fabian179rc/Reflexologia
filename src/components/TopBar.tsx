import React from "react";

export function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-brand-teal/20 py-2 px-4 text-center">
      <p className="text-[10px] sm:text-xs font-bold text-brand-teal tracking-widest">
        🧬 LANZAMIENTO 2026 · Sistema Clínico de Reflexología Profesional ·{" "}
        <span className="text-white">Precio de lanzamiento — sube sin aviso</span>
      </p>
    </div>
  );
}
