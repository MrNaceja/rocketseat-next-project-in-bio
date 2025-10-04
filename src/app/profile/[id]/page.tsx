import { ProfileCard } from "@features/profile-card";
import { ProjectCard } from "@features/project-card";
import { TotalVisits } from "@features/total-visits";
import { Button } from "@ui/button";
import { Plus } from "lucide-react";

export default async function ProfilePage({ params }: PageProps<'/profile/[id]'>) {
    const { id } = await params

    return (
        <div className="px-20 py-16 grid grid-cols-6 gap-32">
            <p className="text-content-body typografy-body-medium bg-background-tertiary p-2 fixed top-0 left-0 right-0 text-center">
                Voce está usando a versão trial. <a href={`/profile/${id}/upgrade`} className="typografy-label text-accent-green">Faça upgrade agora!</a>
            </p>

            <section className="col-span-2 flex flex-col gap-5">
                <ProfileCard 
                    className="flex-1"
                />
                <TotalVisits />
            </section>

            <section className="col-span-4 space-y-3">
                <header className="flex items-center justify-between">
                    <h3 className="text-content-heading typografy-heading-small">Projetos</h3>
                    <Button className="flex items-cent">
                        <Plus />
                        Adicionar link
                    </Button>
                </header>

                <ul className="flex flex-wrap gap-5">
                    {
                        Array.from({ length: 5 }).map((_, idx) => (
                            <li key={idx + id}>
                                <ProjectCard 
                                    title={`Projeto ${idx}`}
                                    description={`Descrição do projeto ${idx}`}
                                    preview={`https://picsum.photos/100/100`}
                                    interactionsAmount={idx + 1 * (idx % 2)}
                                />
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}