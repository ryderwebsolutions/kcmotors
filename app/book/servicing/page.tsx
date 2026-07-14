import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Service | KC Motors",
  description:
    "Book car servicing with KC Motors in Carrick-on-Shannon — full and interim services, oil changes and fluid top-ups.",
};

export default function ServicingBookingPage() {
  return (
    <BookingForm
      breadcrumbLabel="Book Service"
      pageTitle="Book Servicing with KC Motors in Carrick-on-Shannon"
      panelLabel="Service Booking"
      subject="Service Booking"
      reminderOptIn={{
        label: "Remind me when my next service is due",
        note: "We'll give you a call or text ahead of your next service date.",
      }}
    />
  );
}
