"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((nav) => {
        return (
          <Link
            key={nav.name}
            href={nav.path}
            className={`${
              nav.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {nav.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
