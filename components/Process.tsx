import { business } from "@/data/business";
import { PhoneIcon } from "@/components/Icons";

const steps = [
  {
    number: "01",
    title: "Call or email us",
    body: `Ring ${business.phoneDisplay} or email us to tell us what's going on.`,
  },
  {
    number: "02",
    title: "Tell us what you need",
    body: "Tyres, a service, a strange noise, a warning light — we'll talk it through with you.",
  },
  {
    number: "03",
    title: "Bring your car in",
    body: "Drop it to us on Castlecara Road at a time that suits, with parking on site.",
  },
  {
    number: "04",
    title: "Work done properly",
    body: "We carry out the work and explain anything you need to know before you collect it.",
  },
];

export default function Process() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-lime-400">
            How it works
          </p>
          <h2 className="section-heading mt-2 text-white">Simple, from call to collection</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-heading text-4xl font-bold text-lime-400/80">
                {step.number}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-[15px] text-navy-200">{step.body}</p>
            </div>
          ))}
        </div>

        <a href={business.phoneHref} className="btn-primary mt-12">
          <PhoneIcon className="h-5 w-5" />
          Call to Get Started
        </a>
      </div>
    </section>
  );
}
