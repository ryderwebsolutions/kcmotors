import Image from "next/image";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { navLinks } from "@/data/nav";
import { serviceGroupHref } from "@/data/allServices";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-navy-950 pb-24 pt-10 text-navy-300 lg:pb-10">
      <div className="container-page grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/kc-motors-logo-wide.png"
            alt="KC Motors — Driven by Quality"
            width={1964}
            height={801}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed">
            {business.legalDescriptor}. Tyres, servicing, pre-NCT checks and repairs for drivers
            in Carrick-on-Shannon and the surrounding area.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {business.social.instagram && (
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KC Motors on Instagram (opens in a new tab)"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-navy-200 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
            {business.social.facebook && (
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KC Motors on Facebook (opens in a new tab)"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-navy-200 ring-1 ring-white/10 transition-colors hover:bg-lime-400 hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <a href={serviceGroupHref(s.slug)} className="hover:text-lime-400">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-lime-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{business.address.full}</li>
            <li>
              <a href={business.phoneHref} className="hover:text-lime-400">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="hover:text-lime-400 break-all">
                {business.email}
              </a>
            </li>
            <li className="pt-1 text-navy-300">
              Mon–Fri {business.hours[0].hours} &middot; Sat {business.hours[5].hours}
            </li>
            <li>
              <a
                href={business.firstStop.branchPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400"
              >
                First Stop branch page
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-navy-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} KC Motors. All rights reserved.</p>
        <p>
          Website by{" "}
          <a href="https://ryderwebsolutions.com" className="hover:text-lime-400">
            Ryder Web Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
