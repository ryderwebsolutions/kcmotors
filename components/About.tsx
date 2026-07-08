import Image from "next/image";
import { business } from "@/data/business";
import { placeholderImages } from "@/data/images";

const thumbnails = [
  placeholderImages.tools,
  placeholderImages.oilChange,
  placeholderImages.engineBay,
  placeholderImages.tyres,
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container-page grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">About us</p>
          <h2 className="section-heading mt-2">
            KC Motors offer car repairs, servicing &amp; sales in Carrick-on-Shannon
          </h2>
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

          <a href="#contact" className="btn-primary mt-8">
            More About Us &raquo;
          </a>
        </div>

        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 shadow-card">
            <Image
              src={placeholderImages.about.src}
              alt={placeholderImages.about.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {thumbnails.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square overflow-hidden rounded-lg shadow-card"
              >
                <Image src={img.src} alt={img.alt} fill sizes="12vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
