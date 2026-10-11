import React from "react";
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06151b] border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)]">
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

            {/* 3 Badges de Segurança em Cyber-Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {securityPills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.title}
                    className="cyber-card rounded-2xl p-5 flex flex-col items-start gap-3"
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

          {/* Lado Direito: Escudo Holográfico 3D com Listras de Força */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-80 h-80 bg-gradient-to-tr from-cyan-400/25 via-emerald-500/20 to-transparent rounded-full blur-[110px] pointer-events-none" />

            {/* Escudo 3D SVG com Efeitos de Glow */}
            <div className="relative w-68 h-76 sm:w-80 sm:h-88 flex items-center justify-center [transform:perspective(1000px)_rotateY(-6deg)]">
              <svg viewBox="0 0 200 240" className="w-full h-full filter drop-shadow-[0_0_40px_rgba(0,242,254,0.45)]">
                {/* Linha externa do escudo */}
                <path
                  d="M100 10 L180 45 V125 C180 180 100 225 100 225 C100 225 20 180 20 125 V45 Z"
                  fill="#051217"
                  stroke="#00f2fe"
                  strokeWidth="3.5"
                />
                {/* Linha interna com listras de força */}
                <path
                  d="M100 25 L165 55 V120 C165 168 100 205 100 205 C100 205 35 168 35 120 V55 Z"
                  fill="#03080b"
                  stroke="#00e676"
                  strokeWidth="2.5"
                  strokeDasharray="8 5"
                />
              </svg>

              {/* Cadeado Central Holográfico */}
              <div className="absolute flex flex-col items-center justify-center">
                <div className="w-22 h-22 rounded-2xl bg-gradient-to-br from-[#00e676] via-[#05f292] to-cyan-400 p-1 shadow-[0_0_35px_rgba(0,230,118,0.7)] animate-pulse">
                  <div className="w-full h-full rounded-xl bg-[#040c0f] flex items-center justify-center text-[#00e676]">
                    <Lock className="w-10 h-10 drop-shadow-[0_0_10px_#00e676]" />
                  </div>
                </div>
                <span className="text-[11px] font-mono font-black tracking-widest text-cyan-300 uppercase mt-4 bg-[#051419] px-3 py-1 rounded-full border border-cyan-400/40 shadow-md">
                  ENCRYPTED 256-BIT
                </span>
              </div>
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
