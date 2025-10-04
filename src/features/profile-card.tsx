import { Button } from "@ui/button";
import { cn } from "@utils/classnames";
import { Facebook, Github, Instagram, Linkedin, Plus, UserPen } from "lucide-react";
import Image from "next/image";
import type { ComponentProps } from "react";


interface ProfileCardProps extends ComponentProps<'article'>{

}
export function ProfileCard({ className, ...props }: ProfileCardProps) {
    return (
        <article className={cn(
            `
                border divide-y divide-border-primary border-border-primary bg-background-secondary p-10 flex flex-col gap-5
                w-fit rounded-4xl [&>_:not(:last-child)]:py-3
            `,
            className
        )} {...props}>
            <div className="flex flex-col gap-5">
                <Image 
                    src="https://github.com/MrNaceja.png"
                    alt="Imagem de perfil"
                    width={200}
                    height={200}
                    className="size-[200px] aspect-square rounded-full ring-4 ring-border-primary self-center"
                />

                <div>
                    <span className="flex items-center gap-2">
                        <h3 className="typografy-heading-medium text-content-heading flex-1 truncate" title="Mr Naceja">Mr Naceja</h3>
                        <Button variant="outline">
                            <UserPen />
                        </Button>
                    </span>
                    <span className="text-content-body typografy-body-medium">Eu desenvolvo aplicações do futuro</span>    
                </div>
            </div>
            <aside className="space-y-2">
                <h5 className="uppercase">
                    links
                </h5>

                <div className="space-x-3">
                    <Button variant="secondary">
                        <Linkedin />
                    </Button>
                    <Button variant="secondary">
                        <Instagram />
                    </Button>
                    <Button variant="secondary">
                        <Facebook />
                    </Button>
                    <Button variant="secondary">
                        <Github />
                    </Button>
                    <Button variant="secondary">
                        <Plus />
                    </Button>
                </div>
            </aside>
            <div className="flex flex-col gap-3 justify-center items-center">
                <Button>
                    Confiram meu template SaaS
                </Button>

                <Button variant="secondary">
                    <Plus />
                </Button>
            </div>
        </article>
    )
}