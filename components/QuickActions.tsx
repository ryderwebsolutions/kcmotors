import { serviceIcons } from "@/components/Icons";

// Short-label jump links into the matching service card below — mirrors the
// icon-strip pattern used across most garage sites, without reusing any of
// their copy or markup.
const items = [
  { slug: "servicing", label: "Servicing", icon: "wrench" },
  { slug: "pre-nct", label: "Pre-NCT", icon: "clipboard" },
  { slug: "general-maintenance", label: "Air Con", icon: "spray" },
  { slug: "brakes", label: "Brakes", icon: "brake" },
  { slug: "tyres-wheels", label: "Tyres", icon: "tyre" },
  { slug: "diagnostics", label: "Diagnostics", icon: "scan" },
] as const;

export default function QuickActions() {
  return (
    <div className="border-b border-navy-100 bg-navy-50">
      <div className="container-page">
        <div className="grid grid-cols-3 sm:grid-cols-6">
          {items.map((item, i) => {
            const Icon = serviceIcons[item.icon];
            const isLastInRow = (i + 1) % 3 === 0;
            const isLastOverall = i === items.length - 1;
            return (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className={`group flex flex-col items-center gap-3 border-navy-100 px-2 py-7 text-center transition-colors hover:bg-white sm:border-b-0 ${
                  !isLastInRow ? "border-r" : ""
                } ${i < 3 ? "border-b" : ""} ${!isLastOverall ? "sm:border-r" : ""}`}
              >
                <Icon className="h-9 w-9 text-navy-300 transition-colors group-hover:text-lime-600" />
                <span className="text-xs font-bold uppercase tracking-wide text-navy-800 sm:text-sm">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
