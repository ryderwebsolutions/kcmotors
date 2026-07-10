import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Enquiry | KC Motors",
  description: "Get in contact with KC Motors in Carrick-on-Shannon — we're happy to help.",
};

export default function EnquiryPage() {
  return (
    <BookingForm
      breadcrumbLabel="Enquiry"
      pageTitle="Contact KC Motors in Carrick-on-Shannon"
      panelLabel="General Enquiry"
      subject="General Enquiry"
      includeVehicleFields={false}
      includeSchedule={false}
    />
  );
}
