import { LandingSections } from "@features/landing/sections";
import { Play } from "lucide-react";

export function HeroSection() {
    return (
        <section className="min-h-screen container space-y-6 p-20" id={LandingSections.HERO}>
            <div className="w-full flex flex-col gap-3 items-center text-center">
                <span className="uppercase text-content-heading typografy-label">7 dias grátis</span>
                <h1 className="max-w-[90%] leading-tight text-8xl font-bold bg-gradient-to-r from-content-heading to-content-headline bg-clip-text text-transparent">
                    Crie Seu Portfólio e Links em Minutos
                </h1>
                <p className="text-content-body typografy-body-large max-w-[50%]">
                    Mostre seu trabalho de forma profissional e simplifique sua presença online com uma plataforma fácil e personalizável.
                </p>
            </div>

            <figure className="h-[675px] rounded-lg relative bg-accent-purple-dark">
                <Play className="size-16 absolute top-[50%] left-[50%] translate-[-50%,-50%] text-content-heading"/>
            </figure>
        </section>
    )
}