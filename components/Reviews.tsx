import { business } from "@/data/business";
import { StarIcon } from "@/components/Icons";

export default function Reviews() {
  return (
    <section id="reviews" className="py-14 sm:py-16">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Reputation</p>
          <h2 className="section-heading mt-2">Trusted by local drivers</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-start rounded-xl2 bg-navy-900 p-8 text-white shadow-card">
            <div className="flex text-lime-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-6 w-6 ${i < Math.round(business.googleRating) ? "" : "opacity-30"}`}
                />
              ))}
            </div>
            <p className="mt-3 font-heading text-4xl font-bold">{business.googleRating}/5</p>
            <p className="mt-1 text-sm text-navy-200">Average rating on {business.ratingSource}</p>
          </div>

          <div className="rounded-xl2 border-2 border-dashed border-navy-200 p-8 lg:col-span-2">
            <p className="font-heading text-lg font-semibold text-navy-800">
              Real customer reviews coming soon
            </p>
            <p className="mt-2 max-w-lg text-[15px] text-navy-500">
              This space is reserved for genuine KC Motors customer feedback — we only publish
              real reviews, nothing invented.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
