import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  cacheComponents: false,
  images: {
    unoptimized: true,
    minimumCacheTTL: 60 * 60 * 24 * 365,
    qualities: [70, 75, 80, 85, 90, 95, 100],
  },
};

export default nextConfig;
