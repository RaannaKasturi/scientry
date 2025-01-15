import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'http',
        hostname: 'i.ibb.co',
      }
    ],
  },
};

export default nextConfig;
