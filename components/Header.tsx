"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/data/nav";
import { business } from "@/data/business";
import { allServices, serviceGroupHref } from "@/data/allServices";
import {
  PhoneIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
  InstagramIcon,
  WhatsAppIcon,
  FacebookIcon,
} from "@/components/Icons";

const topNavLinks = navLinks.filter((link) => link.href !== "#tyres");

const shortcutLinkClasses =
  "border-l border-white/15 pl-4 text-xs font-bold uppercase tracking-wide text-navy-200 transition-colors first:border-l-0 first:pl-0 hover:text-lime-400";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur supports-[backdrop-filter]:bg-navy-900/90">
      <div className="container-page relative flex items-center justify-between gap-6 py-3 sm:py-3.5 lg:py-4">
        <a href="#home" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/kc-motors-logo-transparent.png"
            alt="KC Motors — Driven by Quality"
            width={1750}
            height={445}
            className="h-12 w-auto sm:h-16 lg:h-20"
            priority
          />
        </a>

        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
          <a
            href={business.phoneHref}
            className="pointer-events-auto text-2xl font-black tracking-tight text-white transition-colors hover:text-lime-400"
          >
            {business.phoneDisplay}
          </a>
        </div>

        <div className="hidden flex-1 flex-col items-end gap-2.5 lg:flex">
          <nav className="flex items-center" aria-label="Primary">
            {topNavLinks.map((link) => (
              <a key={link.href} href={link.href} className={shortcutLinkClasses}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={business.phoneHref}
              className="btn-primary px-4 py-2 text-xs"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </a>

            <div className="flex items-center gap-2 border-l border-white/15 pl-4">
              {business.social.facebook && (
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KC Motors on Facebook (opens in a new tab)"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-white"
                >
                  <FacebookIcon className="h-3.5 w-3.5" />
                </a>
              )}
              {business.social.instagram && (
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KC Motors on Instagram (opens in a new tab)"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-white"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                </a>
              )}
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message KC Motors on WhatsApp (opens in a new tab)"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-white"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-3 lg:hidden">
          {business.social.facebook && (
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KC Motors on Facebook (opens in a new tab)"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-white sm:h-11 sm:w-11"
            >
              <FacebookIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </a>
          )}
          {business.social.instagram && (
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KC Motors on Instagram (opens in a new tab)"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-white sm:h-11 sm:w-11"
            >
              <InstagramIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </a>
          )}
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message KC Motors on WhatsApp (opens in a new tab)"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-white sm:h-11 sm:w-11"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
          </a>
          <a
            href={business.phoneHref}
            className="btn-primary hidden sm:inline-flex"
          >
            <PhoneIcon className="h-5 w-5" />
            Call Now
          </a>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white sm:h-11 sm:w-11"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-5 w-5 sm:h-6 sm:w-6" /> : <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      <div className="hidden border-t border-white/10 lg:block">
        <div className="container-page flex items-center justify-center py-2.5">
          <div className="group relative border-l border-white/15 pl-4 first:border-l-0 first:pl-0">
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-navy-200 transition-colors hover:text-lime-400"
            >
              Repairs &amp; Services
              <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl2 bg-navy-900 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
                <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                  {allServices.map((item) => (
                    <a
                      key={item.name}
                      href={serviceGroupHref(item.groupSlug)}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-navy-100 transition-colors hover:bg-white/5 hover:text-lime-400"
                    >
                      <span className="text-lime-400">&raquo;</span>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm text-navy-300">Not sure what you need?</span>
                  <a href={business.phoneHref} className="btn-primary">
                    <PhoneIcon className="h-4 w-4" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href={serviceGroupHref("servicing")} className={shortcutLinkClasses}>
            Servicing
          </a>
          <a href="#tyres" className={shortcutLinkClasses}>
            Tyres
          </a>
          <a href={serviceGroupHref("diagnostics")} className={shortcutLinkClasses}>
            Diagnostics
          </a>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-navy-900 lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy-100 hover:bg-white/5 hover:text-lime-400"
            >
              Home
            </a>

            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-navy-100 hover:bg-white/5 hover:text-lime-400"
            >
              Services
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mb-1 grid grid-cols-2 gap-x-4 gap-y-1 px-3 pb-2">
                {allServices.map((item) => (
                  <a
                    key={item.name}
                    href={serviceGroupHref(item.groupSlug)}
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-sm text-navy-300 hover:text-lime-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}

            {navLinks
              .filter((link) => link.label !== "Home")
              .map((link) => (
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
