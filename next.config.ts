import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint configuration for build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
