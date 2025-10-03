import { LandingSections } from "@features/landing/sections";
import logo from "@public/logo.svg";
import { NavLink } from "@ui/nav-link";
import Image from "next/image";

type SectionNavigation = {
  target: LandingSections;
  label: string;
};

const sectionsNavigation: SectionNavigation[] = [
  {
    target: LandingSections.HERO,
    label: "Inicio",
  },
  {
    target: LandingSections.PRICING,
    label: "Preço",
  },
  {
    target: LandingSections.ANSWERS,
    label: "FAQ",
  },
];

export function Header() {
  return (
    <header className="px-20 py-10">
      <div className="container flex items-center justify-between gap-3">
        <nav className="space-x-6">
          {sectionsNavigation.map(({ target, label }) => (
            <NavLink href={`#${target}`} key={target}>
              {label}
            </NavLink>
          ))}
        </nav>

        <Image
          src={logo}
          alt="ProjectInBio Logotipo"
          className="flex-1 max-w-56"
        />

        <aside>
          <NavLink href="/login" className="text-center min-w-32" variant="primary">
            Login
          </NavLink>
        </aside>
      </div>
    </header>
  );
}
