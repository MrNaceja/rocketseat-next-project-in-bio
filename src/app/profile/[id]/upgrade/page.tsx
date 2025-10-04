'use client'

import { PlanCard } from "@features/landing/plan-card";
import { Button } from "@ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UpgradePage() {
    const router = useRouter()
    return (
        <div className="min-h-screen grid place-items-center">
            <div className="flex flex-col gap-6 items-center">
                <h4 className="typografy-heading-medium text-content-heading">Escolha o plano</h4>
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

                <Button onClick={() => router.back()} className="flex items-center gap-2" variant="secondary">
                    <ArrowLeft />
                    Voltar
                </Button>
            </div>
        </div>
    )
}