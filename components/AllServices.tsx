import { allServices } from "@/data/allServices";
import { business } from "@/data/business";

export default function AllServices() {
  return (
    <div className="mt-16 border-t border-navy-100 pt-12">
      <h3 className="font-heading text-lg font-semibold text-navy-900">All Services A–Z</h3>
      <p className="mt-2 max-w-2xl text-[15px] text-navy-500">
        The full list of what we handle at KC Motors. Don&apos;t see what you need? Call us
        anyway — if we can&apos;t do it, we&apos;ll point you in the right direction.
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
        {allServices.map((item) => (
          <li key={item.name}>
            <a
              href={`#${item.groupSlug}`}
              className="text-[15px] text-navy-600 underline decoration-navy-200 underline-offset-2 hover:text-lime-700 hover:decoration-lime-400"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={business.phoneHref}
        className="mt-6 inline-flex items-center text-sm font-semibold text-navy-800 hover:text-lime-700"
      >
        Not sure which service you need? Call us &rarr;
      </a>
    </div>
  );
}
