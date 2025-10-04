import { cn } from "@utils/classnames"
import Image from "next/image"
import type { ComponentProps } from "react"
import { tv } from "tailwind-variants"

const interactionsAmountColorByAmountStatus = tv({
    base: "uppercase typografy-body-small font-bold",
    variants: {
        amountStatus: {
            empty: "text-border-tertiary",
            medium: "text-accent-yellow",
            good: "text-accent-green"
        }
    },
    defaultVariants: {
        amountStatus: "empty"
    }
})

interface ProjectCardProps extends ComponentProps<'div'>{
    interactionsAmount: number,
    title: string,
    description: string,
    preview: string
}
export function ProjectCard({ title, description, preview, interactionsAmount, className, ...props }: ProjectCardProps) {

    const amountStatus = (
        interactionsAmount === 0 
        ? "empty" 
        : (
            interactionsAmount <= 10 
            ? "medium"
            : "good"
        )
    )

    return (
        <div 
            className={cn("rounded-3xl p-3 flex gap-5 bg-background-secondary w-fit min-w-96 border border-border-primary", className)}
            {...props}
        >
            <Image
                src={preview}
                alt={title}
                className="aspect-square size-24 rounded-2xl"
                width={96}
                height={96}
            />
            <div className="flex flex-col gap-2 justify-between">
                <span className={interactionsAmountColorByAmountStatus({ amountStatus })}>{interactionsAmount} cliques</span>

                <span>
                    <h5 className="typografy-body-medium font-bold text-content-heading">{title}</h5>
                    <p className="typografy-body-medium text-content-body">{description}</p>
                </span>
            </div>
        </div>
    )
}