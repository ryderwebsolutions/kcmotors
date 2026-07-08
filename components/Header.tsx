"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/data/nav";
import { business } from "@/data/business";
import { PhoneIcon, MenuIcon, CloseIcon } from "@/components/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur supports-[backdrop-filter]:bg-navy-900/90">
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/images/kc-motors-logo.jpg"
            alt="KC Motors logo"
            width={44}
            height={44}
            className="h-10 w-10 rounded-md sm:h-11 sm:w-11"
            priority
          />
          <span className="font-heading text-lg font-bold leading-tight text-white sm:text-xl">
            KC Motors
            <span className="block text-[11px] font-medium tracking-wide text-lime-400">
              Driving Trust
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-navy-100 transition-colors hover:text-lime-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="btn-primary hidden sm:inline-flex"
          >
            <PhoneIcon className="h-5 w-5" />
            Call Now
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-navy-900 lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy-100 hover:bg-white/5 hover:text-lime-400"
              >
                {link.label}
              </a>
            ))}
            <a href={business.phoneHref} className="btn-primary mt-3 sm:hidden">
              <PhoneIcon className="h-5 w-5" />
              Call {business.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
