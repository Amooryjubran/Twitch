import { ReactNode } from "react";
import Link from "next/link";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 focus:bg-white/5 focus:outline-none text-twitch-text"
    >
      {children}
    </Link>
  );
}
