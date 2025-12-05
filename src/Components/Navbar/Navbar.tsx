// components/Navbar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-gray-900 p-6 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-lg font-medium transition-all ${
                  isActive(item.href)
                    ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1"
                    : "text-gray-300 hover:text-white"
                }`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
