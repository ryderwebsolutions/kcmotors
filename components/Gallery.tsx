import Image from "next/image";
import { placeholderImages } from "@/data/images";
import Reveal from "@/components/Reveal";

const tiles = [
  { image: placeholderImages.tools, caption: "Proper tools for the job" },
  { image: placeholderImages.oilChange, caption: "Servicing & oil changes" },
  { image: placeholderImages.engineBay, caption: "Engine & diagnostics" },
  { image: placeholderImages.mechanicAtWork, caption: "Hands-on repairs" },
];

export default function Gallery() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Inside the workshop</p>
          <h2 className="section-heading mt-2">A proper garage, doing proper work</h2>
          <p className="mt-4 text-lg text-navy-500">
            A glimpse of the day-to-day at KC Motors — these will be swapped for real photos of
            the workshop once they&apos;re in.
          </p>
        </div>

        <Reveal className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {tiles.map((tile) => (
            <div
              key={tile.caption}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl2 shadow-card"
            >
              <Image
                src={tile.image.src}
                alt={tile.image.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
              <p className="absolute inset-x-3 bottom-3 text-sm font-semibold text-white">
                {tile.caption}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
