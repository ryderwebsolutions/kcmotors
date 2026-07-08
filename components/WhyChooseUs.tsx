import {
  PinIcon,
  PhoneIcon,
  ClipboardIcon,
  ClockIcon,
  ParkingIcon,
  TyreIcon,
} from "@/components/Icons";
import Reveal from "@/components/Reveal";

const points = [
  {
    icon: PinIcon,
    title: "Local & easy to find",
    body: "On Castlecara Road, Carrick-on-Shannon, close to the town centre.",
  },
  {
    icon: PhoneIcon,
    title: "Straightforward advice",
    body: "Call before you book — we'll tell you honestly what needs doing.",
  },
  {
    icon: TyreIcon,
    title: "Tyres & vehicle support",
    body: "A First Stop branch for tyres, plus full servicing and repairs.",
  },
  {
    icon: ClockIcon,
    title: "Convenient hours",
    body: `Open Mon–Fri and Saturday mornings — see full hours below.`,
  },
  {
    icon: ClipboardIcon,
    title: "Pre-NCT checks",
    body: "Catch issues before your test, not after a fail.",
  },
  {
    icon: ParkingIcon,
    title: "Off-street parking",
    body: "Parking on site, so dropping off or waiting for your car is no hassle.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Why choose us</p>
          <h2 className="section-heading mt-2">Why local drivers choose KC Motors</h2>
        </div>

        <Reveal className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-lime-400">
                <point.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading font-semibold text-navy-900">{point.title}</h3>
                <p className="mt-1 text-[15px] text-navy-500">{point.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
