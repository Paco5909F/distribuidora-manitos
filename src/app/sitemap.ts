import { MetadataRoute } from "next";

import { TENANT_CONFIG } from "@/config/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = TENANT_CONFIG.seo.domain;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/catalogo`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
