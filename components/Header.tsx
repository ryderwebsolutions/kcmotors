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
          <a
            href="#home"
            className="text-[15px] font-medium text-navy-100 transition-colors hover:text-lime-400"
          >
            Home
          </a>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-[15px] font-medium text-navy-100 transition-colors hover:text-lime-400"
            >
              Services
              <ChevronDownIcon className="h-4 w-4 transition-transform duration-150 group-hover:rotate-180" />
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

          {navLinks
            .filter((link) => link.label !== "Home")
            .map((link) => (
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
          {business.social.facebook && (
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KC Motors on Facebook (opens in a new tab)"
              className="hidden h-11 w-11 items-center justify-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-navy-900 sm:inline-flex"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          )}
          {business.social.instagram && (
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KC Motors on Instagram (opens in a new tab)"
              className="hidden h-11 w-11 items-center justify-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-navy-900 sm:inline-flex"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          )}
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message KC Motors on WhatsApp (opens in a new tab)"
            className="hidden h-11 w-11 items-center justify-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-navy-900 sm:inline-flex"
          >
            <WhatsAppIcon className="h-5 w-5" />
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
