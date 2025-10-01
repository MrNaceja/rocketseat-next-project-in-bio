import { useId } from "@hooks/use-id";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textarea = tv({
    slots: {
        wrapperSlot: "space-y-2 group w-fit",
        inputSlot: `
            bg-background-secondary rounded-xl p-3 text-content-headline placeholder:text-content-placeholder typografy-body-medium
            border border-transparent group-hover:border-border-secondary focus:border-border-tertiary min-w-96
        `,
        labelSlot: "block typografy-label text-content-heading"
    }
})

type TextAreaVariants = VariantProps<typeof textarea>

interface TextAreaProps extends TextAreaVariants, ComponentProps<"textarea"> {
}
export function TextArea({ className, children: label, id:_id, rows = 6,...props }: TextAreaProps) {
    const id = useId(_id)

    const { wrapperSlot, inputSlot, labelSlot } = textarea()

    return (
        <div className={wrapperSlot()}>
            {
                label && (
                    <label htmlFor={id} className={labelSlot()}>{label}</label>
                )
            }
            <textarea {...props} id={id} rows={rows} className={inputSlot({ className })}/>
        </div>
    )
}