import { faqs } from "@/data/faqs";

function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FAQ() {
  return (
    <section className="bg-navy-50 py-14 sm:py-16">
      <FaqJsonLd />
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Questions</p>
          <h2 className="section-heading mt-2">Frequently asked questions</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl2 bg-white p-6 shadow-card ring-1 ring-navy-100 open:ring-lime-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-navy-900 marker:content-none">
                {faq.question}
                <span className="ml-2 shrink-0 text-lime-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-500">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
