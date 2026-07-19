import { ImageResponse } from "next/og";
import { services } from "@/data/services";
import { OgImageLayout } from "@/lib/ogImage";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  return new ImageResponse(<OgImageLayout title={service?.name ?? "KC Motors"} />, { ...size });
}
