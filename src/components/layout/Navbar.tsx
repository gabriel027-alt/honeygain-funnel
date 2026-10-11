"use client";

import React, { useState } from "react";
import { Logo } from "@/components/common/Logo";
import { SITE_CONFIG } from "@/constants/config";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Calculadora", href: "#calculadora" },
    { label: "Pagamentos", href: "#pagamentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#04080a]/85 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="hover:opacity-95 transition-opacity">
          <Logo />
        </a>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-[#00e676] hover:drop-shadow-[0_0_8px_#00e676] transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop com Glow Pulsante */}
        <div className="hidden md:flex items-center">
          <a
            href={SITE_CONFIG.referralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00e676] to-[#05f292] text-[#04080a] text-xs font-black tracking-wide shadow-[0_0_20px_rgba(0,230,118,0.4)] hover:shadow-[0_0_35px_rgba(0,230,118,0.7)] transition-all transform hover:scale-[1.04] active:scale-[0.98] animate-pulse-glow"
          >
            <span>Começar Agora</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Botão Mobile */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#06151b] border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-300 hover:text-[#00e676] py-1.5"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={SITE_CONFIG.referralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#00e676] text-[#04080a] text-xs font-black shadow-[0_0_20px_rgba(0,230,118,0.5)]"
            >
              <span>Começar Agora</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
