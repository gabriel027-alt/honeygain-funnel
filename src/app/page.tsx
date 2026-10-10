import { HeroSection } from "@/components/hero/HeroSection";
import { EarningsCalculator } from "@/components/calculator/EarningsCalculator";
import { SITE_CONFIG } from "@/constants/config";
import { Gift, ExternalLink, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Top Notification Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 text-xs sm:text-sm font-bold py-2.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <Gift className="w-4 h-4 shrink-0" />
          <span>
            Bônus especial de ${SITE_CONFIG.bonusAmountUsd}.00 liberado pelo link exclusivo de indicação!
          </span>
          <a
            href={SITE_CONFIG.referralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 ml-1 inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <span>Resgatar agora</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Interactive Calculator Section */}
      <EarningsCalculator />

      {/* Footer simples e transparente de conformidade e incentivo */}
      <footer className="py-12 px-4 border-t border-slate-900 bg-slate-950/80 text-xs text-slate-500 text-center space-y-3">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Criptografia de Ponta a Ponta
          </span>
          <span className="flex items-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-amber-400" /> Bônus Garantido com Código {SITE_CONFIG.referralCode}
          </span>
        </div>
        <p className="max-w-2xl mx-auto text-slate-600">
          Este site é uma página promocional independente para apresentação da plataforma Honeygain. Os rendimentos variam de acordo com o tráfego da sua operadora e estabilidade de conexão.
        </p>
        <p className="text-slate-700">
          © 2026 • Guia de Renda Passiva Honeygain
        </p>
      </footer>
    </main>
  );
}
