import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="flex items-center gap-2 shrink-0"
    >
      <Image
        src="/logo.svg"
        alt="Twitch"
        width={32}
        height={32}
        priority
        className="h-8 w-8"
      />
    </Link>
  );
}
