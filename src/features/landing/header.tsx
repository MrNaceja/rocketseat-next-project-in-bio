import logo from "@public/logo.svg";
import { Button } from "@ui/button";
import Image from "next/image";
import Link from "next/link";

type SectionNavigation = {
  target: "hero" | "pricing" | "answers";
  label: string;
};

const sectionsNavigation: SectionNavigation[] = [
  {
    target: "hero",
    label: "Inicio",
  },
  {
    target: "pricing",
    label: "Preço",
  },
  {
    target: "answers",
    label: "FAQ",
  },
];

export function Header() {
  return (
    <header className="px-20 py-10">
      <div className="container flex items-center justify-between gap-3">
        <nav className="space-x-6">
        {sectionsNavigation.map(({ target, label }) => (
          <Link
            href={`#${target}`}
            key={target}
            className="text-content-headline typografy-label hover:text-content-heading"
          >
            {label}
          </Link>
        ))}
      </nav>

      <Image
        src={logo}
        alt="ProjectInBio Logotipo"
        className="flex-1 max-w-56"
      />

      <aside>
        <Button className="min-w-32">Login</Button>
      </aside>
      </div>
    </header>
  );
}
