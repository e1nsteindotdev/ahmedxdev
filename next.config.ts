import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore build errors on Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
