import Image from "next/image";
import { business } from "@/data/business";
import { placeholderImages } from "@/data/images";
import { PhoneIcon, DirectionsIcon, StarIcon, ClockIcon, PinIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900">
      <Image
        src={placeholderImages.hero.src}
        alt={placeholderImages.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/80 to-navy-900/60 lg:from-navy-900/95 lg:via-navy-900/55 lg:to-navy-900/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />

      <div className="container-page relative py-20 sm:py-28 lg:grid lg:grid-cols-[1fr,380px] lg:items-center lg:gap-12 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-lime-400 ring-1 ring-inset ring-white/15">
            Local garage · Carrick-on-Shannon
          </span>

          <h1 className="mt-5 font-heading text-5xl font-bold uppercase leading-[1.05] tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl">
            Tyres, Servicing &amp; Vehicle Repairs in Carrick-on-Shannon
          </h1>

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
            <a href="#about" className="btn-outline-light">
              View Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-navy-100/90 lg:hidden">
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

        {/* Floating trust/quick-contact card — desktop only */}
        <div className="hidden lg:block">
          <div className="rounded-xl2 bg-white/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <div className="flex text-lime-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i < Math.round(business.googleRating) ? "" : "opacity-25"}`}
                  />
                ))}
              </div>
              <span className="font-heading text-lg font-bold text-navy-900">
                {business.googleRating}/5
              </span>
            </div>
            <p className="text-xs text-navy-400">Rated on Google by local drivers</p>

            <div className="mt-5 space-y-3 border-t border-navy-100 pt-5">
              <div className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-lime-600" />
                <div className="text-sm">
                  <p className="font-semibold text-navy-900">Mon–Fri {business.hours[0].hours}</p>
                  <p className="text-navy-500">Saturday {business.hours[5].hours}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-lime-600" />
                <div className="text-sm">
                  <p className="font-semibold text-navy-900">Castlecara Road</p>
                  <p className="text-navy-500">Carrick-on-Shannon, off-street parking</p>
                </div>
              </div>
            </div>

            <a href={business.phoneHref} className="btn-primary mt-5 w-full">
              <PhoneIcon className="h-5 w-5" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
