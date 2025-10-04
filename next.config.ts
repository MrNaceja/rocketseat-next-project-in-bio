import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        new URL("https://github.com/*.png"),
        {
            protocol: "https",
            hostname: "picsum.photos"
        }
    ]
  }
};

export default nextConfig;
