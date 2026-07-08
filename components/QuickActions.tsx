import { services } from "@/data/services";
import { serviceIcons } from "@/components/Icons";

// The most commonly searched-for jobs, as fast jump links into the matching
// service card below — mirrors the "quick action" pattern used across most
// garage sites, without reusing any of their copy or markup.
const quickLinks = ["tyres-wheels", "servicing", "pre-nct", "brakes", "batteries", "diagnostics"]
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

export default function QuickActions() {
  return (
    <div className="border-b border-navy-100 bg-white">
      <div className="container-page py-5">
        <div className="flex gap-3 overflow-x-auto sm:flex-wrap sm:overflow-visible">
          {quickLinks.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="flex shrink-0 items-center gap-2 rounded-full bg-navy-50 px-4 py-2.5 text-sm font-semibold text-navy-800 ring-1 ring-navy-100 transition-colors hover:bg-lime-100 hover:text-navy-900 hover:ring-lime-300"
              >
                <Icon className="h-4 w-4 text-lime-600" />
                {service.name.split(" & ")[0]}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
