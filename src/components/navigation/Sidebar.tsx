"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/projects", label: "Prosjekter" },
  { href: "/about", label: "Om" },
];

const linkClass = (active: boolean) =>
  [
    "block text-lg transition-colors",
    active ? "text-neutral-900 font-semibold" : "text-neutral-600 hover:text-neutral-900",
  ].join(" ");

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="min-h-screen w-64 shrink-0 border-r bg-white/80 backdrop-blur">
      <nav className="flex h-full flex-col items-start gap-5 px-8 py-10">
        <Link href="/" className="text-3xl font-semibold">
          JH
        </Link>
        {links.map(({ href, label }) => {
          const active = pathname === href;

          return (
            <Link key={href} href={href} className={linkClass(active)} aria-current={active ? "page" : undefined}>
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
