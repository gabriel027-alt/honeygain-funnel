import React from "react";
import { SITE_CONFIG } from "@/constants/config";
import {
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Lock,
  Globe2,
  DollarSign,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-white">
      {/* Background Gradients & Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/20 via-yellow-500/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern sutil no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge Superior */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-medium shadow-lg shadow-amber-500/5 hover:border-amber-500/50 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>
              Cupom Especial Ativado: Ganhe <strong>$5.00 USD Grátis</strong> no Cadastro
            </span>
          </div>
        </div>

        {/* Título Principal (H1) */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
            Transforme sua internet parada em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              renda passiva em Dólar
            </span>
          </h1>

          {/* Subtítulo persuasivo */}
          <p className="text-slate-300 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto font-normal leading-relaxed">
            Compartilhe a banda não utilizada da sua conexão sem esforço. Sem anúncios, sem tarefas chatas e com pagamentos diretos via <strong>PayPal</strong> ou <strong>Cripto</strong>.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.referralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Criar Conta e Resgatar $5.00 Grátis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href="#calculadora"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.01]"
            >
              <Calculator className="w-5 h-5 text-amber-400" />
              <span>Simular Meus Ganhos</span>
            </a>
          </div>

          {/* Micro-benefícios rápidos abaixo do CTA */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Gratuito Para Sempre</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Funciona no Windows, Mac, Celular e Linux</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Bônus Oficial de $5.00 Liberado</span>
            </div>
          </div>
        </div>

        {/* Visual Hero Mockup / Widget Flutuante */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-amber-500/30 via-slate-800/40 to-transparent shadow-2xl shadow-black/80">
            <div className="rounded-[22px] bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                
                {/* Cartão de Status em Tempo Real */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Status do Sistema</span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-sm font-bold text-emerald-400">Renda Ativa em Segundo Plano</span>
                    </div>
                  </div>
                </div>

                {/* Cartão de Bônus Inicial Garantido */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Bônus de Cadastro</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                      +$5.00 USD <span className="text-emerald-400 font-semibold text-xs">(Já no Saldo)</span>
                    </span>
                  </div>
                </div>

                {/* Cartão de Privacidade e Segurança */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Segurança de Dados</span>
                    <span className="text-sm font-bold text-slate-200 mt-0.5 block">
                      Zero Acesso a Arquivos Pessoais
                    </span>
                  </div>
                </div>

              </div>

              {/* Faixa inferior de confiança */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-amber-400" />
                  <span>Utilizado por mais de 5 milhões de pessoas no mundo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Conexão criptografada e verificada pelo Trustpilot</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
