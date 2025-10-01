import { useId } from "@hooks/use-id";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const input = tv({
    slots: {
        wrapperSlot: "space-y-2 group w-fit",
        inputSlot: `
            bg-background-secondary rounded-xl p-3 text-content-headline placeholder:text-content-placeholder typografy-body-medium
            border border-transparent group-hover:border-border-secondary focus:border-border-tertiary
        `,
        labelSlot: "block typografy-label text-content-heading"
    }
})

type InputVariants = VariantProps<typeof input>

interface InputProps extends InputVariants, ComponentProps<"input"> {
}
export function Input({ className, children: label, id:_id, ...props }: InputProps) {
    const id = useId(_id)

    const { wrapperSlot, inputSlot, labelSlot } = input()

    return (
        <div className={wrapperSlot()}>
            {
                label && (
                    <label htmlFor={id} className={labelSlot()}>{label}</label>
                )
            }
            <input type="text" id={id} {...props} className={inputSlot({ className })}/>
        </div>
    )
}