import Link from "next/link"
import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const navlink = tv({
    base: "typografy-label text-content-heading border border-transparent transition-colors inline-block",
    variants: {
        variant: {
            plain: "text-content-headline typografy-label hover:text-content-heading",
            outline: "border-border-primary hover:bg-background-secondary/50 rounded-xl p-3",
            primary: "bg-accent-purple hover:bg-accent-purple/80 rounded-xl p-3",
            secondary: "bg-background-tertiary hover:bg-background-tertiary/80 rounded-xl p-3"
        }
    },
    defaultVariants: {
        variant: "plain"
    }
})

type NavLinkVariants = VariantProps<typeof navlink>

export interface NavLinkProps extends NavLinkVariants, ComponentProps<typeof Link> {}
export function NavLink({ variant, className, ...props }: NavLinkProps) {
    return (
        <Link className={navlink({ variant, className })} {...props} />
    )
}