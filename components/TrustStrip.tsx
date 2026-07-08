import { business } from "@/data/business";
import { TyreIcon, ClipboardIcon, PinIcon, StarIcon } from "@/components/Icons";

const items = [
  { icon: PinIcon, label: "Local Carrick-on-Shannon garage" },
  { icon: TyreIcon, label: "Tyres, servicing & repairs" },
  { icon: ClipboardIcon, label: "Pre-NCT checks available" },
  { icon: StarIcon, label: `Rated ${business.googleRating}/5 on Google` },
];

export default function TrustStrip() {
  return (
    <div className="border-b border-navy-100 bg-white">
      <div className="container-page grid grid-cols-2 gap-y-5 py-6 sm:grid-cols-4 sm:gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-700">
              <item.icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium text-navy-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
