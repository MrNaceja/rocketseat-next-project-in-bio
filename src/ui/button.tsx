import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
    base: "rounded-xl p-3 typografy-label text-content-heading border border-transparent transition-colors",
    variants: {
        variant: {
            outline: "border-border-primary hover:bg-background-secondary/50",
            primary: "bg-accent-purple hover:bg-accent-purple/80",
            secondary: "bg-background-tertiary hover:bg-background-tertiary/80"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

type ButtonVariants = VariantProps<typeof button>

interface ButtonProps extends ButtonVariants, ComponentProps<"button"> { }
export function Button({ className, variant,...props }: ButtonProps) {
    return (
        <button className={button({ variant, className })} {...props} />
    )
}