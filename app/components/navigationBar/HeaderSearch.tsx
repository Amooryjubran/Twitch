"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function HeaderSearch({
  onSubmit,
}: {
  onSubmit?: (q: string) => void;
}) {
  const [q, setQ] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(q.trim());
      }}
      className="relative flex w-full max-w-xl items-center"
      role="search"
      aria-label="Search"
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search"
        className="w-full rounded-md border px-10 py-2 text-sm outline-none bg-[var(--color-twitch-input)] border-twitch-border text-twitch-text placeholder:text-twitch-text-muted"
      />
      <Search
        className="absolute left-3 h-4 w-4 text-twitch-text-muted"
        aria-hidden
      />
      <button
        type="submit"
        className="absolute right-1 rounded-md px-3 py-1 text-xs font-semibold bg-twitch-purple hover:bg-[var(--color-twitch-hover)] text-white"
        aria-label="Submit search"
      >
        Search
      </button>
    </form>
  );
}
