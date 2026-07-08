import Image from "next/image";
import { business } from "@/data/business";
import { placeholderImages } from "@/data/images";
import { CheckIcon, PhoneIcon, ShieldCheckIcon } from "@/components/Icons";

const points = [
  "Tyre fitting and replacement for all makes and models",
  "Puncture repair, wheel alignment, balancing and rotation",
  "TPMS (tyre pressure monitoring) checks",
  "Advice over the phone before you book anything in",
];

const badges = [
  { label: "First Stop Branch", detail: "Listed tyre service branch" },
  { label: "ITIA Member", detail: business.firstStop.memberOf },
  { label: "Bridgestone Approved", detail: "Silver website status" },
];

export default function TyresFirstStop() {
  return (
    <section id="tyres" className="py-20 sm:py-24">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Tyres made simple</p>
          <h2 className="section-heading mt-2">Tyre services through First Stop</h2>
          <p className="mt-4 text-lg text-navy-500">
            KC Motors is listed as a First Stop branch for tyre services, and is an accredited
            member of the Irish Tyre Industry Association. In practice, that just means: call us
            directly and we&apos;ll sort your tyres — fitting, repair, alignment or advice.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-700">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px] text-navy-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={business.phoneHref} className="btn-primary">
              <PhoneIcon className="h-5 w-5" />
              Call About Tyres
            </a>
            <a
              href={business.firstStop.branchPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View First Stop Branch Page
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 rounded-lg bg-navy-50 px-3.5 py-2.5 ring-1 ring-navy-100"
              >
                <ShieldCheckIcon className="h-4 w-4 shrink-0 text-lime-600" />
                <div>
                  <p className="text-xs font-semibold leading-tight text-navy-900">{badge.label}</p>
                  <p className="text-[11px] leading-tight text-navy-400">{badge.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-navy-400">
            KC Motors is an independent garage and a First Stop branch — not the First Stop head
            office.
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 shadow-card">
          <Image
            src={placeholderImages.tyres.src}
            alt={placeholderImages.tyres.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
