import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Repairs | KC Motors",
  description:
    "Book a repair with KC Motors in Carrick-on-Shannon — brakes, diagnostics, exhausts, steering & suspension and more.",
};

export default function RepairsBookingPage() {
  return (
    <BookingForm
      breadcrumbLabel="Book Repairs"
      pageTitle="Book Repairs with KC Motors in Carrick-on-Shannon"
      panelLabel="Repair Enquiry"
      subject="Repair Enquiry"
    />
  );
}
