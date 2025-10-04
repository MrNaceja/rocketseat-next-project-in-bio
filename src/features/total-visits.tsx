import { NavLink } from "@ui/nav-link";
import { TrendingUp } from "lucide-react";

export function TotalVisits() {
    return (
        <div className="w-fit border border-border-primary bg-background-secondary px-8 py-3 rounded-xl flex items-center gap-3 divide-x divide-border-primary">
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