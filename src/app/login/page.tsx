import { Header } from "@features/login/header";
import { ProfileCard } from "@features/profile-card";
import { ProjectCard } from "@features/project-card";
import { TotalVisits } from "@features/total-visits";
import { Button } from "@ui/button";
import { Input } from "@ui/input";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <section className="grid grid-cols-[.65fr_1fr] gap-6 container flex-1 items-center">
                <article className="space-y-6">
                    <h1 className="text-content-heading typografy-heading-large">
                        Seus projetos e redes sociais em um unico link
                    </h1>
                    <p className="text-content-body typografy-body-large">
                        Crie sua própria página de projetos e compartilhe eles com o mundo.
                        Acompanhe o engajamento com Analytics de cliques
                    </p>

                    <form className="flex items-center gap-2">
                        <label htmlFor="project-link">projectinbio.com/</label>
                        <Input placeholder="seu link" id="project-link" className="flex-1" />
                        <Button type="submit">Criar agora</Button>
                    </form>
                </article>

                <figure 
                    className="relative bg-[radial-gradient(circle_at_50%_50%,var(--color-accent-purple-dark),transparent_50%)] h-full"
                >
                    <ProjectCard
                        className="z-0 absolute top-10 left-32"
                        description="Conteúdo ficticio"
                        title="Conteúdo ficticio"
                        interactionsAmount={2}
                        preview="https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <ProjectCard
                        className="z-0 absolute top-56 left-20" 
                        description="Conteúdo ficticio"
                        title="Conteúdo ficticio"
                        interactionsAmount={15}
                        preview="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <ProfileCard
                        className="z-10 absolute top-[50%] left-[50%] -translate-[50%]"        
                    />
                    <TotalVisits className="z-20 absolute bottom-32 right-32"/>
                </figure>

            </section>
        </div>
    )
}