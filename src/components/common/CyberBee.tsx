import React from "react";

interface CyberBeeProps {
  className?: string;
  size?: number;
}

export function CyberBee({ className = "", size = 130 }: CyberBeeProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none animate-float ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Halo de luz traseira */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00e676]/30 via-cyan-400/25 to-transparent blur-xl pointer-events-none" />

      {/* Anel de Órbita Holográfico */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/40 transform -rotate-12 scale-110 pointer-events-none animate-pulse">
        <div className="absolute top-0 left-1/4 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#00f2fe]" />
        <div className="absolute bottom-2 right-1/4 w-2 h-2 rounded-full bg-[#00e676] shadow-[0_0_8px_#00e676]" />
      </div>

      {/* SVG da Abelhinha Mascote Cyberpunk */}
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Gradiente das Asas Holográficas */}
          <linearGradient id="wingGradLeft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#00e676" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#041219" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wingGradRight" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#00e676" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#041219" stopOpacity="0.1" />
          </linearGradient>

          {/* Gradiente do Corpo da Abelha */}
          <linearGradient id="beeBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd600" />
            <stop offset="45%" stopColor="#ffab00" />
            <stop offset="100%" stopColor="#e65100" />
          </linearGradient>

          {/* Gradiente dos Óculos Escuros / Goggles */}
          <linearGradient id="gogglesGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0d2e38" />
            <stop offset="40%" stopColor="#00222b" />
            <stop offset="100%" stopColor="#00141a" />
          </linearGradient>

          {/* Brilho dos Óculos */}
          <linearGradient id="lensReflect" x1="0" y1="0" x2="1" y2="0.8">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#00e676" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ASA ESQUERDA */}
        <path
          d="M74 65 C48 30, 20 40, 24 66 C28 88, 62 82, 74 72 Z"
          fill="url(#wingGradLeft)"
          stroke="#00f2fe"
          strokeWidth="1.5"
          className="animate-pulse"
        />
        <path d="M38 52 C48 62, 58 68, 70 70" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" />

        {/* ASA DIREITA */}
        <path
          d="M86 65 C112 30, 140 40, 136 66 C132 88, 98 82, 86 72 Z"
          fill="url(#wingGradRight)"
          stroke="#00f2fe"
          strokeWidth="1.5"
          className="animate-pulse"
        />
        <path d="M122 52 C112 62, 102 68, 90 70" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" />

        {/* FERRÃO CYBER */}
        <path d="M80 138 L72 124 H88 L80 138 Z" fill="#00e676" stroke="#00f2fe" strokeWidth="1.2" />

        {/* CORPO DA ABELHA (Gordinho e simpático) */}
        <ellipse cx="80" cy="95" rx="38" ry="34" fill="url(#beeBody)" />

        {/* LISTRAS PRETAS CYBERPUNK */}
        {/* Listra 1 */}
        <path
          d="M48 88 C60 96, 100 96, 112 88 C115 94, 114 99, 110 104 C98 111, 62 111, 50 104 C46 99, 45 94, 48 88 Z"
          fill="#0c1d24"
        />
        {/* Listra 2 */}
        <path
          d="M54 109 C65 116, 95 116, 106 109 C104 116, 99 122, 94 125 C85 128, 75 128, 66 125 C61 122, 56 116, 54 109 Z"
          fill="#0c1d24"
        />

        {/* BRILHO NEON NA LISTRA */}
        <path d="M54 96 C68 102, 92 102, 106 96" stroke="#00e676" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M60 115 C70 120, 90 120, 100 115" stroke="#00f2fe" strokeWidth="1.5" strokeLinecap="round" />

        {/* CABEÇA */}
        <circle cx="80" cy="64" r="28" fill="#ffd600" />

        {/* ANTENAS CYBER COM ESFERAS EMISSORAS */}
        <path d="M72 40 Q62 24, 52 26" stroke="#0c1d24" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="26" r="5" fill="#00e676" stroke="#00f2fe" strokeWidth="1.5" className="animate-ping" />
        <circle cx="50" cy="26" r="4" fill="#00e676" />

        <path d="M88 40 Q98 24, 108 26" stroke="#0c1d24" strokeWidth="3" strokeLinecap="round" />
        <circle cx="110" cy="26" r="5" fill="#00e676" stroke="#00f2fe" strokeWidth="1.5" className="animate-ping" />
        <circle cx="110" cy="26" r="4" fill="#00e676" />

        {/* ÓCULOS CYBERPUNK (SHADES ESTILOSOS) */}
        {/* Armação */}
        <rect x="52" y="52" width="56" height="20" rx="10" fill="#06151b" stroke="#00e676" strokeWidth="2" />
        {/* Lente Esquerda */}
        <rect x="55" y="54" width="23" height="16" rx="8" fill="url(#gogglesGrad)" />
        <path d="M58 56 L72 66" stroke="url(#lensReflect)" strokeWidth="3" strokeLinecap="round" />

        {/* Lente Direita */}
        <rect x="82" y="54" width="23" height="16" rx="8" fill="url(#gogglesGrad)" />
        <path d="M85 56 L99 66" stroke="url(#lensReflect)" strokeWidth="3" strokeLinecap="round" />

        {/* Ponte dos óculos */}
        <path d="M78 61 H82" stroke="#00e676" strokeWidth="2.5" />

        {/* SORRISO SIMPÁTICO */}
        <path
          d="M72 78 Q80 85, 88 78"
          stroke="#0c1d24"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* BOCHECHAS ROSADAS CYBER */}
        <circle cx="56" cy="74" r="4" fill="#ff4081" fillOpacity="0.4" />
        <circle cx="104" cy="74" r="4" fill="#ff4081" fillOpacity="0.4" />
      </svg>
    </div>
  );
}
