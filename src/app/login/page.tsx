import { Header } from "@features/login/header";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { ProjectCard } from "@ui/project-card";

export default function LoginPage() {
    return (
        <div className="bg-[radial-gradient(circle_at_75%_50%,var(--color-accent-purple-dark),transparent_50%)] min-h-screen flex flex-col">
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
                        <Input placeholder="seu link" id="project-link" className="flex-1"/>
                        <Button type="submit">Criar agora</Button>
                    </form>
                </article>

                <div>
                    <ProjectCard 
                        title="Banana"
                        description="A Banana nunca falha"
                        interactionsAmount={24}
                        preview="https://github.com/MrNaceja.png"
                    />
                    <ProjectCard 
                        title="Banana"
                        description="A Banana nunca falha"
                        interactionsAmount={9}
                        preview="https://github.com/MrNaceja.png"
                    />
                    <ProjectCard 
                        title="Banana"
                        description="A Banana nunca falha"
                        interactionsAmount={0}
                        preview="https://github.com/MrNaceja.png"
                    />
                </div>


            </section>
        </div>
    )
}