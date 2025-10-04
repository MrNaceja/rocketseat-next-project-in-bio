import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
    base: "outline-none rounded-xl p-3 typografy-label text-content-heading border border-transparent transition-colors focus-visible:ring-2 ring-accent-purple",
    variants: {
        variant: {
            outline: "border-border-primary hover:bg-background-tertiary/50",
            primary: "bg-accent-purple hover:bg-accent-purple/70",
            secondary: "bg-background-tertiary hover:bg-background-tertiary/70"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

type ButtonVariants = VariantProps<typeof button>

export interface ButtonProps extends ButtonVariants, ComponentProps<"button"> { }
export function Button({ className, variant,...props }: ButtonProps) {
    return (
        <button className={button({ variant, className })} {...props} />
    )
}