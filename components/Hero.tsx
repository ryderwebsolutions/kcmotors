import Image from "next/image";
import { business } from "@/data/business";
import { placeholderImages } from "@/data/images";
import { PhoneIcon, DirectionsIcon, StarIcon, ClockIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900">
      <Image
        src={placeholderImages.hero.src}
        alt={placeholderImages.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/85 to-navy-900" />

      <div className="container-page relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-lime-400 ring-1 ring-inset ring-white/15">
            Local garage · Carrick-on-Shannon
          </span>

          <h1 className="section-heading mt-5 text-4xl text-white sm:text-5xl lg:text-6xl">
            Tyres, Servicing &amp; Vehicle Repairs in Carrick-on-Shannon
          </h1>

          <p className="mt-5 max-w-xl text-lg text-navy-100/90">
            KC Motors is a professional, family-run garage on Castlecara Road, helping local
            drivers with tyres, servicing, pre-NCT checks, diagnostics and repairs — done properly,
            explained clearly.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={business.phoneHref} className="btn-primary">
              <PhoneIcon className="h-5 w-5" />
              Call KC Motors
            </a>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              <DirectionsIcon className="h-5 w-5" />
              Get Directions
            </a>
            <a href="#services" className="btn-outline-light">
              View Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-navy-100/90">
            <div className="flex items-center gap-1.5">
              <div className="flex text-lime-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i < Math.round(business.googleRating) ? "" : "opacity-30"}`}
                  />
                ))}
              </div>
              <span className="font-semibold text-white">{business.googleRating} / 5</span>
              <span>on Google</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4 text-lime-400" />
              <span>
                Mon–Fri {business.hours[0].hours} &middot; Sat {business.hours[5].hours}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
