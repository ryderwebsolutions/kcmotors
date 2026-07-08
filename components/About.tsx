import Image from "next/image";
import { business } from "@/data/business";
import { placeholderImages } from "@/data/images";

export default function About() {
  return (
    <section id="about" className="bg-navy-50 py-20 sm:py-24">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 shadow-card lg:order-2">
          <Image
            src={placeholderImages.about.src}
            alt={placeholderImages.about.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:order-1">
          <p className="eyebrow">About us</p>
          <h2 className="section-heading mt-2">A local garage run by people who know your car</h2>
          <p className="mt-4 text-lg text-navy-500">
            {business.legalDescriptor}, run by {business.managers.join(" and ")}. We look after the
            practical, everyday things that keep a car safe and legal — tyres, servicing, pre-NCT
            checks, diagnostics and repairs — for drivers across Carrick-on-Shannon and the
            surrounding area.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-navy-500">
            No jargon, no upselling — just straightforward advice, work done properly, and a
            garage that&apos;s easy to reach when you need it.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {business.facilities.map((facility) => (
              <div
                key={facility}
                className="rounded-lg bg-white px-3 py-3 text-center text-xs font-medium text-navy-600 ring-1 ring-navy-100"
              >
                {facility}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
