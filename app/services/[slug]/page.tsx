import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { allServices } from "@/data/allServices";
import { placeholderImages } from "@/data/images";
import { business } from "@/data/business";
import { serviceIcons, PhoneIcon, CheckIcon } from "@/components/Icons";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Where the secondary CTA should point for each service group — the primary
// action is always a phone call, matching the pattern used across the rest
// of the site (Hero, TyresFirstStop, Contact all lead with "Call Now").
const secondaryCta: Record<string, { label: string; href: string }> = {
  "tyres-wheels": { label: "View Tyres & First Stop Details", href: "/#tyres" },
  servicing: { label: "Book Servicing", href: "/book/servicing" },
  "pre-nct": { label: "Book Pre-NCT Check", href: "/book/pre-nct" },
  brakes: { label: "Book Repairs", href: "/book/repairs" },
  diagnostics: { label: "Book Repairs", href: "/book/repairs" },
  "steering-suspension": { label: "Book Repairs", href: "/book/repairs" },
  exhausts: { label: "Book Repairs", href: "/book/repairs" },
  batteries: { label: "Get In Touch", href: "/enquiry" },
  "general-maintenance": { label: "Get In Touch", href: "/enquiry" },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.name} in Carrick-on-Shannon | KC Motors`;

  return {
    title,
    description: `${service.description} Call KC Motors on ${business.phoneDisplay} to book.`,
    alternates: { canonical: `https://kc-motors.ie/services/${service.slug}` },
    openGraph: { title, description: service.description },
  };
}

function ServiceJsonLd({ service }: { service: (typeof services)[number] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "AutoRepair",
      name: "KC Motors",
      telephone: business.phoneHref.replace("tel:", ""),
      address: business.address.full,
    },
    areaServed: {
      "@type": "City",
      name: "Carrick-on-Shannon",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon];
  const included = allServices.filter((item) => item.groupSlug === service.slug);
  const cta = secondaryCta[service.slug];
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      <section className="bg-navy-900 py-14 sm:py-16">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-300">
            <Link href="/" className="hover:text-lime-400">
              Home
            </Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-navy-100">{service.name}</span>
          </nav>

          <div className="mt-5 flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-lime-400">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <h1 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
                {service.name} in Carrick-on-Shannon
              </h1>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-navy-300">
                {service.description}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={business.phoneHref} className="btn-primary">
              <PhoneIcon className="h-5 w-5" />
              Call {business.phoneDisplay}
            </a>
            {cta && (
              <Link href={cta.href} className="btn-outline-light">
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1fr,320px]">
          <div>
            {included.length > 0 && (
              <>
                <p className="eyebrow">What&apos;s included</p>
                <h2 className="section-heading mt-2">
                  {service.name} at KC Motors covers
                </h2>
                <ul className="mt-6 space-y-3">
                  {included.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-700">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[15px] text-navy-700">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <p className="mt-8 text-[15px] leading-relaxed text-navy-500">
              Not sure exactly what your car needs? Call the team and we&apos;ll talk you through
              it before you book anything in — no obligation.
            </p>
          </div>

          <div className="h-fit space-y-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 shadow-card">
              <Image
                src={placeholderImages[service.image].src}
                alt={placeholderImages[service.image].alt}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="rounded-xl2 bg-navy-900 p-7 text-white shadow-card">
              <p className="font-heading text-lg font-bold">Get in touch</p>
              <p className="mt-2 text-sm text-navy-300">
                Mon&ndash;Fri {business.hours[0].hours} &middot; Sat {business.hours[5].hours}
              </p>
              <a href={business.phoneHref} className="btn-primary mt-5 w-full">
                <PhoneIcon className="h-5 w-5" />
                {business.phoneDisplay}
              </a>
              <p className="mt-4 text-sm text-navy-300">{business.address.full}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-16">
        <div className="container-page">
          <p className="eyebrow">More from KC Motors</p>
          <h2 className="section-heading mt-2">Other services</h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {otherServices.map((s) => {
              const OtherIcon = serviceIcons[s.icon];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-3 rounded-xl2 bg-white p-4 shadow-card ring-1 ring-navy-100 transition-colors hover:ring-lime-300"
                >
                  <OtherIcon className="h-6 w-6 shrink-0 text-navy-300 transition-colors group-hover:text-lime-600" />
                  <span className="text-sm font-semibold text-navy-800">{s.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
