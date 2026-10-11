import React from "react";

interface Coin3DProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  delay?: string;
}

export function Coin3D({ size = "md", className = "", delay = "0s" }: Coin3DProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-xl",
  };

  return (
    <div
      style={{ animationDelay: delay }}
      className={`relative inline-flex items-center justify-center rounded-full select-none animate-float-coin ${sizeClasses[size]} ${className}`}
    >
      {/* Outer Neon Glow */}
      <div className="absolute inset-0 rounded-full bg-[#00e676]/40 blur-md pointer-events-none" />

      {/* 3D Coin Edge & Bezel */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#05f292] via-[#00e676] to-[#00b0ff] p-[2.5px] shadow-[0_6px_20px_rgba(0,230,118,0.5),inset_0_2px_4px_rgba(255,255,255,0.7)]">
        {/* Coin Inner Face with metallic sheen */}
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#02281b] via-[#063827] to-[#004d36] flex items-center justify-center border border-[#00e676]/60 relative overflow-hidden">
          {/* Glossy reflection streak */}
          <div className="absolute -top-3 -left-3 w-8 h-8 bg-white/25 rounded-full blur-sm transform rotate-45" />

          {/* Inner ring */}
          <div className="absolute inset-1 rounded-full border border-dashed border-[#05f292]/40" />

          {/* Engraved $ Sign */}
          <span className="relative font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#05f292] to-[#00e676] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            $
          </span>
        </div>
      </div>
    </div>
  );
}
