"use client";
import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Bell, Crown, Menu, Search } from "lucide-react";

import Logo from "./Logo";
import NavLink from "./NavLink";
import BitsButton from "./BitsButton";
import HeaderSearch from "./HeaderSearch";
import MobileSearchOverlay from "./MobileSearchOverlay";

export default function NavigationBar() {
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-twitch-bg border-twitch-border text-twitch-text">
      <nav className="mx-auto flex h-14 max-w-screen-2xl items-center gap-3 px-3 sm:px-4">
        {/* Left: logo + primary links */}
        <div className="flex min-w-0 items-center gap-1 sm:gap-2">
          <Logo />
          <div className="hidden md:flex items-center">
            <NavLink href="/following">Following</NavLink>
            <NavLink href="/directory">Browse</NavLink>
            <NavLink href="/esports">Esports</NavLink>
            <NavLink href="/music">Music</NavLink>
          </div>
        </div>

        {/* Center: search (desktop) */}
        <div className="mx-auto hidden min-w-0 flex-1 md:flex justify-center">
          <HeaderSearch />
        </div>

        {/* Right: actions */}
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          {/* Mobile search trigger */}
          <button
            className="md:hidden grid place-items-center rounded-md p-2 text-twitch-text"
            aria-label="Open search"
            onClick={() => setMobileSearch(true)}
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Crown (Prime Loot) */}
          <button
            className="hidden sm:grid place-items-center rounded-md p-2 hover:bg-white/5 text-twitch-text"
            title="Prime Loot"
            aria-label="Prime Loot"
          >
            <Crown className="h-5 w-5" />
          </button>

          {/* Notifications */}
          <button
            className="grid place-items-center rounded-md p-2 hover:bg-white/5 text-twitch-text"
            title="Notifications"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>

          {/* Get Bits */}
          <BitsButton />

          {/* Auth */}
          <SignedOut>
            <div className="hidden sm:flex items-center gap-2">
              <SignUpButton>
                <button className="rounded-md border px-3 py-2 text-sm font-semibold border-twitch-border text-twitch-text">
                  Sign Up
                </button>
              </SignUpButton>
              <SignInButton>
                <button className="rounded-md px-3 py-2 text-sm font-semibold bg-twitch-purple hover:bg-[var(--color-twitch-hover)] text-white">
                  Log In
                </button>
              </SignInButton>
            </div>
            {/* Compact on mobile */}
            <div className="sm:hidden flex items-center gap-1">
              <SignInButton>
                <button className="rounded-md px-3 py-2 text-sm font-semibold bg-twitch-purple hover:bg-[var(--color-twitch-hover)] text-white">
                  Log In
                </button>
              </SignInButton>
              <button
                className="grid place-items-center rounded-md p-2 text-twitch-text"
                aria-label="Menu"
                title="Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: { userButtonAvatarBox: "h-8 w-8" },
              }}
              userProfileMode="modal"
              showName={false}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>

      {/* Mobile search overlay */}
      <MobileSearchOverlay
        open={mobileSearch}
        onClose={() => setMobileSearch(false)}
      />
    </header>
  );
}
