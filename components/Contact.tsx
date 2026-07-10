import { business } from "@/data/business";
import { PhoneIcon, MailIcon, PinIcon, DirectionsIcon } from "@/components/Icons";

const actions = [
  {
    icon: PhoneIcon,
    label: "Call us",
    value: business.phoneDisplay,
    href: business.phoneHref,
    cta: "Call Now",
    note: "Fastest option during opening hours.",
  },
  {
    icon: MailIcon,
    label: "Email us",
    value: business.email,
    href: business.emailHref,
    cta: "Email Us",
    note: "Opens your email app, ready to send.",
  },
  {
    icon: PinIcon,
    label: "Visit us",
    value: business.address.full,
    href: business.directionsUrl,
    cta: "Get Directions",
    note: "Off-street parking on site.",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-16">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-heading mt-2">Contact KC Motors</h2>
          <p className="mt-4 text-lg text-navy-500">
            No forms to fill in — pick whichever is easiest for you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {actions.map((action) => (
            <div
              key={action.label}
              className="flex flex-col rounded-xl2 bg-navy-900 p-7 text-white shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lime-400">
                <action.icon className="h-5 w-5" />
              </span>
              <span className="mt-4 text-sm text-navy-300">{action.label}</span>
              <span className="mt-1 font-semibold leading-snug break-words">{action.value}</span>
              <p className="mt-2 flex-1 text-sm text-navy-300">{action.note}</p>
              <a
                href={action.href}
                {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="btn-primary mt-5"
              >
                {action.href === business.phoneHref && <PhoneIcon className="h-5 w-5" />}
                {action.href === business.directionsUrl && <DirectionsIcon className="h-5 w-5" />}
                {action.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
