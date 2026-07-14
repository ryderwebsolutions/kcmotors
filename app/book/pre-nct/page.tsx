import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Pre-NCT Check | KC Motors",
  description:
    "Book a pre-NCT check with KC Motors in Carrick-on-Shannon — small issues sorted before your NCT test, not after a fail.",
};

export default function PreNctBookingPage() {
  return (
    <BookingForm
      breadcrumbLabel="Pre-NCT Booking"
      pageTitle="Book Your Pre-NCT Check with KC Motors in Carrick-on-Shannon"
      panelLabel="Pre-NCT Check Booking"
      subject="Pre-NCT Check Booking"
      reminderOptIn={{
        label: "Remind me when my next NCT is due",
        note: "We'll give you a call or text ahead of your next NCT date.",
      }}
    />
  );
}
