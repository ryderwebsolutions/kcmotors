import type { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `https://kc-motors.ie/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://kc-motors.ie",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages,
    {
      url: "https://kc-motors.ie/book/pre-nct",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://kc-motors.ie/book/servicing",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://kc-motors.ie/book/repairs",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://kc-motors.ie/enquiry",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
