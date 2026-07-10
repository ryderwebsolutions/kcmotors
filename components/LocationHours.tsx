import { business } from "@/data/business";
import { PinIcon, ClockIcon, PhoneIcon, MailIcon, DirectionsIcon } from "@/components/Icons";

export default function LocationHours() {
  return (
    <section id="location" className="bg-navy-50 py-14 sm:py-16">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Find us</p>
          <h2 className="section-heading mt-2">Location &amp; opening hours</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl2 shadow-card ring-1 ring-navy-100">
            <iframe
              title="Map showing KC Motors on Castlecara Road, Carrick-on-Shannon"
              src={business.mapEmbedUrl}
              className="h-80 w-full lg:h-full lg:min-h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-xl2 bg-white p-7 shadow-card ring-1 ring-navy-100 sm:p-8">
            <div className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-lime-600" />
              <div>
                <p className="font-semibold text-navy-900">{business.name}</p>
                <p className="text-[15px] text-navy-500">{business.address.full}</p>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-lime-600" />
              <a href={business.phoneHref} className="text-[15px] font-medium text-navy-800 hover:text-lime-700">
                {business.phoneDisplay}
              </a>
            </div>

            <div className="mt-3 flex items-start gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-lime-600" />
              <a href={business.emailHref} className="text-[15px] font-medium text-navy-800 hover:text-lime-700">
                {business.email}
              </a>
            </div>

            <div className="mt-6 border-t border-navy-100 pt-6">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-lime-600" />
                <p className="font-semibold text-navy-900">Opening Hours</p>
              </div>
              <dl className="mt-3 space-y-1.5">
                {business.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-[15px]">
                    <dt className="text-navy-500">{h.day}</dt>
                    <dd className="font-medium text-navy-800">{h.hours}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-navy-400">{business.lunchBreak}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="btn-primary">
                <PhoneIcon className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <DirectionsIcon className="h-5 w-5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
