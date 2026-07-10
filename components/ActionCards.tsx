import Link from "next/link";
import { serviceIcons, MailIcon } from "@/components/Icons";

const cards = [
  {
    title: "Pre-NCT Checks",
    description: "Book your pre-NCT check with KC Motors — small issues sorted before they become a fail.",
    cta: "Book Now",
    href: "/book/pre-nct",
    icon: serviceIcons.clipboard,
  },
  {
    title: "Car Servicing",
    description: "Book a full or interim service with KC Motors — it's just a click away.",
    cta: "Book Service",
    href: "/book/servicing",
    icon: serviceIcons.wrench,
  },
  {
    title: "Repairs & Diagnostics",
    description: "Book your repairs or diagnostics with KC Motors.",
    cta: "Book Repairs",
    href: "/book/repairs",
    icon: serviceIcons.scan,
  },
  {
    title: "Enquiry",
    description: "Get in contact with KC Motors, we're happy to help.",
    cta: "Get In Touch",
    href: "/enquiry",
    icon: MailIcon,
  },
] as const;

export default function ActionCards() {
  return (
    <div className="bg-navy-50 pb-12 pt-8 sm:pb-14 sm:pt-10">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative flex flex-col overflow-hidden bg-navy-900"
            >
              <card.icon className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rotate-12 text-white/5" />

              <div className="relative flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-bold uppercase leading-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] text-navy-300">{card.description}</p>
              </div>

              <Link
                href={card.href}
                className="relative flex items-center justify-between bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-white transition-colors group-hover:bg-white/15"
              >
                {card.cta} &raquo;
                <span className="absolute right-0 top-0 h-full w-1.5 bg-lime-400" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
