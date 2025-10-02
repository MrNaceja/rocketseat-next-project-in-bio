import { Button, type ButtonProps } from "@ui/button"
import { Formatters } from "@utils/formatters"
import { tv, type VariantProps } from "tailwind-variants"

const planCard = tv({
    slots: {
        wrapperSlot: "w-fit rounded-2xl overflow-hidden flex flex-col items-center",
        cardSlot: "bg-background-primary p-8 space-y-7 min-w-64 border border-transparent"
    },
    variants: {
        variant: {
            default: {
                cardSlot: "border-border-primary rounded-2xl"
            },
            recommended: {
                wrapperSlot: "bg-gradient-to-r from-accent-pink to-accent-purple",
                cardSlot: "m-px rounded-b-2xl"
            }
        }
    },
    defaultVariants: {
        variant: "default"
    }
})

type PlanCardVariants = VariantProps<typeof planCard>

interface PlanCardProps extends PlanCardVariants {
    name: string
    description: string
    value: number
    valueSuffix: string
}

const ctaButtonVariantMap: Record<NonNullable<PlanCardVariants["variant"]>, ButtonProps["variant"]> = {
    default: "secondary",
    recommended: "primary"
}
const currencyFormatter = Formatters.currency()

export function PlanCard({ variant = "default", name, description, value, valueSuffix }: PlanCardProps) {

    const { wrapperSlot, cardSlot } = planCard({ variant })

    return (
        <div className={wrapperSlot()}>
            {
                variant === 'recommended' && (
                    <span className="uppercase typografy-body-small text-content-heading my-1">recomendado</span>
                )
            }
            <div className={cardSlot()}>
                <div>
                    <h4 className="text-content-heading typografy-heading-small">{name}</h4>
                    <span className="text-content-headline typografy-body-medium">{description}</span>
                </div>

                <span className="flex items-center">
                    <h3 className="text-content-heading typografy-heading-medium">{currencyFormatter.format(value)}</h3>
                    <sub className="text-content-headline typografy-heading-small">{valueSuffix}</sub>
                </span>

                <Button variant={ctaButtonVariantMap[variant]} className="w-full">
                    Assinar
                </Button>
            </div>
        </div>
    )
}