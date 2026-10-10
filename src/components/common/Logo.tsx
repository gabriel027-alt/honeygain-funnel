import React from "react";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Ícone da Abelhinha Honeygain estilizada em SVG */}
      <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#00e676] via-[#05f292] to-[#00f2fe] flex items-center justify-center p-1 shadow-[0_0_15px_rgba(0,230,118,0.4)]">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Asas */}
          <ellipse cx="12" cy="10" rx="5" ry="3.5" transform="rotate(-30 12 10)" fill="#ffffff" fillOpacity="0.85" />
          <ellipse cx="20" cy="10" rx="5" ry="3.5" transform="rotate(30 20 10)" fill="#ffffff" fillOpacity="0.85" />
          {/* Corpo da abelha */}
          <ellipse cx="16" cy="18" rx="8" ry="9" fill="#071216" />
          {/* Listras neon */}
          <path d="M9.5 16H22.5" stroke="#00e676" strokeWidth="2" strokeLinecap="round" />
          <path d="M10.5 19.5H21.5" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" />
          {/* Ferrão */}
          <path d="M16 27L14.5 29.5H17.5L16 27Z" fill="#00e676" />
          {/* Olhos/Antenas */}
          <circle cx="13.5" cy="13" r="1.2" fill="#00e676" />
          <circle cx="18.5" cy="13" r="1.2" fill="#00e676" />
          <path d="M14 11L11.5 8" stroke="#00e676" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M18 11L20.5 8" stroke="#00e676" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight text-white font-sans flex items-center">
        honey<span className="text-[#00e676]">gain</span>
      </span>
    </div>
  );
}
