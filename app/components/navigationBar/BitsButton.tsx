import { Diamond } from "lucide-react";

export default function BitsButton() {
  return (
    <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold bg-twitch-purple hover:bg-[var(--color-twitch-hover)] text-white">
      <Diamond className="h-4 w-4" aria-hidden />
      <span className="hidden sm:inline">Get Bits</span>
    </button>
  );
}
