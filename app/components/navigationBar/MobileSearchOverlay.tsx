"use client";
import { useEffect, useRef } from "react";
import HeaderSearch from "./HeaderSearch";

export default function MobileSearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[60] p-4"
      style={{ background: "#0e0e10F2" }}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div className="mx-auto max-w-2xl">
        <HeaderSearch onSubmit={() => onClose()} />
        <div className="mt-3 text-xs text-twitch-text-muted">
          Press Esc to close
        </div>
        <button
          className="mt-4 rounded-md border px-3 py-2 text-sm border-twitch-border text-twitch-text"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
