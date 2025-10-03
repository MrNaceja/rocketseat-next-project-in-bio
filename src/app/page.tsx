import { Header } from "@features/landing/header";
import {
  AnswersSection,
  HeroSection,
  PricingSection,
} from "@features/landing/sections";

export default function LandingPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_50%_0%,var(--color-accent-purple-dark),transparent_50%)]">
      <Header />
      <HeroSection />
      <PricingSection />
      <AnswersSection />
    </div>
  );
}
