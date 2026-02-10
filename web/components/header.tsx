"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/movies", label: "Movies" },
  { href: "/albums", label: "Albums" },
  { href: "/tv", label: "TV Shows" },
  { href: "/literature", label: "Literature" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  // close mobile menu when route changes
  useEffect(() => setOpen(false), [pathname]);

  const panelId = useId();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [panelMaxHeight, setPanelMaxHeight] = useState<number>(0);

  // measure panel height for smooth max-height animation
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    const update = () => setPanelMaxHeight(el.scrollHeight);

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const activeHref =
    nav.find((i) => isActive(pathname ?? "", i.href))?.href ?? null;
  const showActiveUnderline =
    activeHref && (!hoveredHref || hoveredHref === activeHref);

  return (
    <header className="fixed z-50 w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <Link href="/" className="no-underline">
          <span className="text-lg font-semibold tracking-tight">
            Postprofundus
          </span>
        </Link>

        <nav
          className="hidden gap-4 text-sm text-zinc-700 sm:flex"
          onMouseLeave={() => setHoveredHref(null)}
        >
          {nav.map((i) => {
            const active = activeHref === i.href;
            const underlineOn = active
              ? showActiveUnderline
              : hoveredHref === i.href;

            return (
              <Link
                key={i.href}
                href={i.href}
                onMouseEnter={() => setHoveredHref(i.href)}
                className={[
                  "relative pb-1 transition-colors duration-150",
                  "after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:origin-left",
                  "after:transition-transform after:duration-200 after:ease-out",
                  underlineOn
                    ? "after:scale-x-100 after:bg-zinc-700"
                    : "after:scale-x-0 after:bg-zinc-700",
                  active
                    ? "text-zinc-900"
                    : "text-zinc-700 hover:text-zinc-900",
                ].join(" ")}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>

        <div className="sm:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="text-sm text-zinc-700"
          >
            Menu
          </button>

          <div
            id={panelId}
            className={[
              "overflow-clip transition-[max-height,opacity,transform] duration-300 ease-out",
              open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
            ].join(" ")}
            style={{ maxHeight: open ? panelMaxHeight : 0 }}
          >
            <div ref={panelRef} className="mt-2 flex flex-col gap-2 text-sm">
              {nav.map((i) => {
                const active = isActive(pathname ?? "", i.href);
                return (
                  <Link
                    key={i.href}
                    href={i.href}
                    className={[
                      "no-underline",
                      active
                        ? "text-zinc-900 underline underline-offset-4 decoration-zinc-700"
                        : "text-zinc-700 hover:underline",
                    ].join(" ")}
                  >
                    {i.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
