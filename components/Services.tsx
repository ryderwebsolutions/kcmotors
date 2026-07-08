import { services } from "@/data/services";
import { serviceIcons } from "@/components/Icons";
import { business } from "@/data/business";

export default function Services() {
  return (
    <section id="services" className="bg-navy-50 py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="section-heading mt-2">Garage services for everyday driving</h2>
          <p className="mt-4 text-lg text-navy-500">
            Practical, honest work on the things that keep your car safe and legal — from a tyre
            check to a full service.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <div
                key={service.slug}
                className="group flex flex-col rounded-xl2 bg-white p-6 shadow-card ring-1 ring-navy-100 transition-shadow hover:shadow-card-hover"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-lime-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-navy-900">{service.name}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-navy-500">
                  {service.description}
                </p>
                <a
                  href={business.phoneHref}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-navy-800 hover:text-lime-700"
                >
                  Enquire about this &rarr;
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href={business.phoneHref} className="btn-primary">
            Call About a Service
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
