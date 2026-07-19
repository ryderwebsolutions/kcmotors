"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { business } from "@/data/business";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

type Props = {
  breadcrumbLabel: string;
  breadcrumbPath: string;
  pageTitle: string;
  panelLabel: string;
  subject: string;
  includeVehicleFields?: boolean;
  includeSchedule?: boolean;
  submitLabel?: string;
  reminderOptIn?: { label: string; note: string };
};

type Values = {
  name: string;
  email: string;
  phone: string;
  registration: string;
  makeModel: string;
  date: string;
  time: string;
  message: string;
  remindMe: boolean;
};

const initialValues: Values = {
  name: "",
  email: "",
  phone: "",
  registration: "",
  makeModel: "",
  date: "",
  time: "",
  message: "",
  remindMe: false,
};

export default function BookingForm({
  breadcrumbLabel,
  breadcrumbPath,
  pageTitle,
  panelLabel,
  subject,
  includeVehicleFields = true,
  includeSchedule = true,
  submitLabel = "Submit",
  reminderOptIn,
}: Props) {
  const [values, setValues] = useState<Values>(initialValues);
  const [sent, setSent] = useState(false);

  function update(field: keyof Values) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const lines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Telephone: ${values.phone}`,
      ...(includeVehicleFields
        ? [`Vehicle Registration: ${values.registration}`, `Make/Model: ${values.makeModel}`]
        : []),
      ...(includeSchedule
        ? [
            `Preferred Date: ${values.date || "Not specified"}`,
            `Preferred Time: ${values.time || "Not specified"}`,
          ]
        : []),
      ...(reminderOptIn ? [`Reminder opt-in: ${values.remindMe ? "Yes" : "No"}`] : []),
      "",
      values.message,
    ];

    const body = encodeURIComponent(lines.join("\n"));
    const mailSubject = encodeURIComponent(`${subject} — ${values.name || "New enquiry"}`);
    window.location.href = `mailto:${business.email}?subject=${mailSubject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="py-10 sm:py-14">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: breadcrumbLabel, path: breadcrumbPath },
        ]}
      />
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="text-sm text-navy-400">
          <Link href="/" className="hover:text-lime-700">
            Home
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-navy-600">{breadcrumbLabel}</span>
        </nav>

        <h1 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-navy-900 sm:text-4xl">
          {pageTitle}
        </h1>

        <div className="mt-8 max-w-4xl">
          <div className="bg-navy-900 px-6 py-3">
            <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              {panelLabel}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-navy-50 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2">
              <div className="space-y-5">
                <Field label="Name" required>
                  <input
                    type="text"
                    required
                    value={values.name}
                    onChange={update("name")}
                    className="form-input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    value={values.email}
                    onChange={update("email")}
                    className="form-input"
                  />
                </Field>
                <Field label="Telephone" required>
                  <input
                    type="tel"
                    required
                    value={values.phone}
                    onChange={update("phone")}
                    className="form-input"
                  />
                </Field>

                {includeVehicleFields && (
                  <>
                    <Field label="Vehicle Registration" required>
                      <input
                        type="text"
                        required
                        value={values.registration}
                        onChange={update("registration")}
                        className="form-input"
                      />
                    </Field>
                    <Field label="Make / Model" required>
                      <input
                        type="text"
                        required
                        value={values.makeModel}
                        onChange={update("makeModel")}
                        className="form-input"
                      />
                    </Field>
                  </>
                )}

                {includeSchedule && (
                  <>
                    <Field label="Preferred Date">
                      <input
                        type="date"
                        value={values.date}
                        onChange={update("date")}
                        className="form-input"
                      />
                    </Field>
                    <Field label="Preferred Time">
                      <div className="flex items-center gap-6 pt-1">
                        <label className="flex items-center gap-2 text-[15px] text-navy-700">
                          <input
                            type="radio"
                            name="time"
                            value="AM"
                            checked={values.time === "AM"}
                            onChange={update("time")}
                            className="h-4 w-4 accent-lime-600"
                          />
                          AM
                        </label>
                        <label className="flex items-center gap-2 text-[15px] text-navy-700">
                          <input
                            type="radio"
                            name="time"
                            value="PM"
                            checked={values.time === "PM"}
                            onChange={update("time")}
                            className="h-4 w-4 accent-lime-600"
                          />
                          PM
                        </label>
                      </div>
                    </Field>
                  </>
                )}

                {reminderOptIn && (
                  <label className="flex items-start gap-2.5 rounded-md bg-white px-3.5 py-3 ring-1 ring-navy-200">
                    <input
                      type="checkbox"
                      checked={values.remindMe}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, remindMe: e.target.checked }))
                      }
                      className="mt-0.5 h-4 w-4 shrink-0 accent-lime-600"
                    />
                    <span className="text-[15px] text-navy-700">
                      {reminderOptIn.label}
                      <span className="mt-0.5 block text-xs text-navy-400">
                        {reminderOptIn.note}
                      </span>
                    </span>
                  </label>
                )}
              </div>

              <div className="flex flex-col">
                <Field label="Enquiry" required className="flex flex-1 flex-col">
                  <textarea
                    required
                    value={values.message}
                    onChange={update("message")}
                    rows={8}
                    className="form-input flex-1 resize-none"
                  />
                </Field>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
              {sent && (
                <p className="text-sm text-navy-500">
                  Your email app should now be open with this enquiry ready to send.
                </p>
              )}
              <button
                type="submit"
                className="relative flex items-center gap-2 bg-navy-900 px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-800"
              >
                {submitLabel} &raquo;
                <span className="absolute right-0 top-0 h-full w-1.5 bg-lime-400" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-[15px] text-navy-600">
        {label}
        {required && <span className="text-lime-600">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
