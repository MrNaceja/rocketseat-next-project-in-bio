import logo from "@public/logo.svg";
import { NavLink } from "@ui/nav-link";
import Image from "next/image";

export function Header() {
  return (
    <header className="px-20 py-10">
      <div className="container flex items-center justify-between gap-3">
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
