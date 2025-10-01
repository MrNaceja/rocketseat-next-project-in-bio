import React from "react"

export function useId(proposedId?: string) {
    const generatedId = React.useId()

    return proposedId ?? generatedId
}