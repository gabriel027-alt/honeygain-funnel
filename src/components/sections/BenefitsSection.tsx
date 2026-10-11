import React from "react";
import Image from "next/image";
import { UserCheck, ShieldCheck, Headphones, Zap } from "lucide-react";

export function BenefitsSection() {
  const cards = [
    {
      icon: UserCheck,
      title: "Renda passiva real",
      desc: "Seu tráfego vale dinheiro.",
    },
    {
      icon: ShieldCheck,
      title: "Seguro e criptografado",
      desc: "Seus dados são protegidos.",
    },
    {
      icon: Headphones,
      title: "Suporte global",
      desc: "Equipe pronta para ajudar.",
    },
    {
      icon: Zap,
      title: "Flexível e sem limites",
      desc: "Você escolhe quando usar.",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#04080a] text-white">
      {/* Luz volumétrica de fundo */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Textos & 4 Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071a20]/80 border border-cyan-400/40 text-cyan-300 text-xs font-black tracking-widest uppercase shadow-[0_0_18px_rgba(0,242,254,0.2)] backdrop-blur-md">
                <span className="text-[#00e676] animate-pulse">➜</span>
                <span>POR QUE HONEYGAIN?</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Mais do que dinheiro,{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#00e676] to-[#05f292] filter drop-shadow-[0_0_20px_rgba(0,230,118,0.4)]">
                  é liberdade
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Transforme o tempo que você já passa online em uma fonte de renda extra, sem esforço.
              </p>
            </div>

            {/* Grid 2x2 com Efeito Cyber-Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="cyber-card rounded-2xl p-6 space-y-3 border border-cyan-500/15 hover:border-[#00e676]/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#07242e] to-[#0c3a4a] border border-cyan-400/30 flex items-center justify-center text-[#00e676] shadow-[0_0_15px_rgba(0,230,118,0.25)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{c.title}</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lado Direito: Terminal 3D Renderizado de Alta Resolução da Referência */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-20 animate-float transition-transform duration-500 hover:scale-[1.03]">
              <div className="rounded-3xl overflow-hidden border border-cyan-400/30 drop-shadow-[0_0_40px_rgba(0,230,118,0.25)] bg-[#04080a]">
                <Image
                  src="/assets/terminal-3d-art.png"
                  alt="Honeygain Terminal Holográfico 3D"
                  width={420}
                  height={420}
                  className="w-full max-w-sm h-auto object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
