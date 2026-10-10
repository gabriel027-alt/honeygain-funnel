import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { EarningsCalculator } from "@/components/calculator/EarningsCalculator";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { PaymentsSection } from "@/components/sections/PaymentsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050b0e] text-[#f1f7f9] selection:bg-[#00e676] selection:text-[#050b0e]">
      {/* 1. Header Fixo com Navegação e CTA */}
      <Navbar />

      <main>
        {/* 2. Hero Section (Mockup Quadrante 1) */}
        <HeroSection />

        {/* 3. Calculadora de Ganhos Dinâmica (Mockup Quadrante 2) */}
        <EarningsCalculator />

        {/* 4. Como Funciona - 3 Passos & Empresas Parceiras (Mockup Quadrante 3) */}
        <HowItWorks />

        {/* 5. Por Que Honeygain - Liberdade & Cards (Mockup Quadrante 4) */}
        <BenefitsSection />

        {/* 6. Segurança e Privacidade - Escudo & Criptografia (Mockup Quadrante 5) */}
        <SecuritySection />

        {/* 7. Métodos de Pagamento - PayPal, USDT, JumpTask (Mockup Quadrante 6) */}
        <PaymentsSection />

        {/* 8. Provas Reais - Depoimentos, Saques & Métricas (Mockup Quadrante 8) */}
        <TestimonialsSection />

        {/* 9. FAQ Interativo - Accordion de Dúvidas (Mockup Quadrante 7) */}
        <FaqSection />

        {/* 10. CTA Final - Conexão Vale Dinheiro & Mascote (Mockup Quadrante 9) */}
        <FinalCtaSection />
      </main>

      {/* 11. Rodapé Oficial */}
      <Footer />
    </div>
  );
}
