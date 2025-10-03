import { PlanCard } from "@features/landing/plan-card"
import { LandingSections } from "@features/landing/sections"

export function PricingSection() {
    return (
        <section className="min-h-screen container gap-6 px-20 flex flex-col items-center justify-center" id={LandingSections.PRICING}>
            <div className="flex flex-col items-center gap-6 text-center">
                <h2 className="text-content-heading typografy-heading-medium">Um valor acessível para todos</h2>
                <p className="text-content-body typografy-body-large max-w-[50%]">
                    Junte-se à comunidade de criadores e profissionais que já estão elevando sua presença online. Teste gratuitamente por <span className="text-accent-pink">7 dias</span>, sem compromisso!
                </p>
            </div>

            <div className="flex gap-3 justify-center items-end">
                <PlanCard 
                    name="Mensal"
                    description="Apenas"
                    value={9.99}
                    valueSuffix="/mês"
                />
                <PlanCard
                    variant="recommended"
                    name="Anual"
                    description="Economize com"
                    value={99}
                    valueSuffix="/anual"
                />
            </div>
        </section>
    )
}