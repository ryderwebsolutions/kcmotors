import { business } from "@/data/business";
import { PhoneIcon, DirectionsIcon, MailIcon } from "@/components/Icons";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-800/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 lg:hidden">
      <div
        className="grid grid-cols-3 divide-x divide-navy-100"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={business.phoneHref}
          className="flex flex-col items-center gap-0.5 py-2.5 text-navy-800 active:bg-navy-50"
        >
          <PhoneIcon className="h-5 w-5 text-lime-600" />
          <span className="text-xs font-semibold">Call</span>
        </a>
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-2.5 text-navy-800 active:bg-navy-50"
        >
          <DirectionsIcon className="h-5 w-5 text-lime-600" />
          <span className="text-xs font-semibold">Directions</span>
        </a>
        <a
          href={business.emailHref}
          className="flex flex-col items-center gap-0.5 py-2.5 text-navy-800 active:bg-navy-50"
        >
          <MailIcon className="h-5 w-5 text-lime-600" />
          <span className="text-xs font-semibold">Email</span>
        </a>
      </div>
    </div>
  );
}
