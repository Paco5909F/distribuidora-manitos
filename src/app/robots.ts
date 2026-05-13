import { MetadataRoute } from "next";

import { TENANT_CONFIG } from "@/config/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/login"],
    },
    sitemap: `${TENANT_CONFIG.seo.domain}/sitemap.xml`,
  };
}
