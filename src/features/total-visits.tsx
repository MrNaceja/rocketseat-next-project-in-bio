import { NavLink } from "@ui/nav-link";
import { cn } from "@utils/classnames";
import { TrendingUp } from "lucide-react";
import type { ComponentProps } from "react";

interface TotalVisitsProps extends ComponentProps<'div'> {}
export function TotalVisits({ className, ...props }: TotalVisitsProps) {
    return (
        <div 
            className={cn("w-fit border border-border-primary bg-background-secondary px-8 py-3 rounded-xl flex items-center gap-3 divide-x divide-border-primary", className)}
            {...props}
        >
            <div className="flex items-center flex-1 gap-3 border-border-primary pr-3">
                <strong className="text-content-heading typografy-body-medium">
                    Total de visitas
                </strong>
                <span className="text-accent-green flex items-center gap-2">
                    <h3 className="typografy-heading-medium">12,456</h3>
                    <TrendingUp className="size-6"/>
                </span>
            </div>

            <NavLink href="/login">
                Sair
            </NavLink>
        </div>
    )
}