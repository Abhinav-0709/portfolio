import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co images.pexels.com",

      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      }
    ],
  },
  /* config options here */
};

export default nextConfig;
