"use client";

import { useEffect } from "react";
import Link from "next/link";
import { business } from "@/data/business";
import { PhoneIcon } from "@/components/Icons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-navy-900 py-24 sm:py-32">
      <div className="container-page text-center">
        <p className="font-heading text-7xl font-bold text-lime-400 sm:text-8xl">Oops</p>
        <h1 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-navy-300">
          That&apos;s on us, not you. Try again, or call us directly if you need something
          sorted quickly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-outline-light">
            Back to Home
          </Link>
          <a href={business.phoneHref} className="btn-outline-light">
            <PhoneIcon className="h-5 w-5" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
