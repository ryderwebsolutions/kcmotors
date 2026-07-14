import Image from "next/image";
import { business } from "@/data/business";
import { placeholderImages } from "@/data/images";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-16">
      <div className="container-page grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">About us</p>
          <h2 className="section-heading mt-2">
            KC Motors offer car repairs &amp; servicing in Carrick-on-Shannon
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            {business.legalDescriptor}, run by {business.managers.join(" and ")}. We look after the
            practical, everyday things that keep a car safe and legal — tyres, servicing, pre-NCT
            checks, diagnostics and repairs — for drivers across Carrick-on-Shannon and the
            surrounding area.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-navy-500">
            Straightforward advice, work done properly, and a garage that&apos;s easy to reach
            when you need it.
          </p>

          <a href="#contact" className="btn-primary mt-8">
            More About Us &raquo;
          </a>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 shadow-card">
          <Image
            src={placeholderImages.about.src}
            alt={placeholderImages.about.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
