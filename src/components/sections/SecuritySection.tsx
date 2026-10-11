import React from "react";
import Image from "next/image";
import { Lock, UserX, ShieldCheck } from "lucide-react";

export function SecuritySection() {
  const securityPills = [
    {
      icon: Lock,
      title: "Criptografia de ponta",
      desc: "Tráfego residencial 100% blindado com algoritmo 256-bit",
    },
    {
      icon: UserX,
      title: "Sem acesso a dados pessoais",
      desc: "Zero acesso a fotos, arquivos, senhas ou histórico de navegação",
    },
    {
      icon: ShieldCheck,
      title: "Conformidade internacional",
      desc: "Auditorias globais e conformidade estrita com RGPD e CCPA",
    },
  ];

  const companies = [
    { name: "Google", style: "font-sans font-bold" },
    { name: "amazon", style: "font-mono font-bold lowercase" },
    { name: "Meta", style: "font-sans font-black" },
    { name: "Microsoft", style: "font-sans font-semibold tracking-tight" },
    { name: "verizon", style: "font-sans font-extrabold italic" },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#04080a] text-white">
      {/* Luz volumétrica de fundo */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Conteúdo & 3 Cards de Segurança */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071a20]/80 border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)] backdrop-blur-md">
                <span className="text-[#00e676] animate-pulse">➜</span>
                <span>SEGURANÇA E PRIVACIDADE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Seus dados estão protegidos
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                O Honeygain usa tráfego residencial criptografado para conectar empresas Fortune 500, realizando pesquisas de mercado, verificação de anúncios e muito mais.
              </p>
            </div>

            {/* 3 Badges de Segurança com borda ultrafina de 1px */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {securityPills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.title}
                    className="p-5 rounded-2xl border border-emerald-500/25 bg-[#071a20]/80 backdrop-blur-md flex flex-col items-start gap-3 hover:border-[#00e676]/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#07242e] to-[#0c3a4a] text-[#00e676] flex items-center justify-center border border-emerald-500/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-white">{pill.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{pill.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lado Direito: Escudo 3D Renderizado da Imagem de Referência */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-80 h-80 bg-gradient-to-tr from-cyan-400/25 via-emerald-500/20 to-transparent rounded-full blur-[110px] pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden drop-shadow-[0_20px_50px_rgba(0,242,254,0.35)] border border-cyan-400/30 bg-[#06151b]/40 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]">
              <Image
                src="/assets/shield-3d-art.png"
                alt="Honeygain Escudo 3D de Criptografia e Segurança"
                width={330}
                height={360}
                className="w-auto h-[320px] sm:h-[350px] object-contain drop-shadow-[0_15px_35px_rgba(0,230,118,0.3)]"
              />
            </div>
          </div>

        </div>

        {/* Faixa Inferior de Empresas */}
        <div className="text-center space-y-6 pt-6 border-t border-cyan-500/10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
            Empresas que usam nosso tráfego
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {companies.map((c) => (
              <span key={c.name} className={`text-xl sm:text-2xl text-slate-300 hover:text-white transition-colors ${c.style}`}>
                {c.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
