import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/leads", destination: "/", permanent: true },
      { source: "/recover", destination: "/system#recover", permanent: true },
      { source: "/scale", destination: "/system#scale", permanent: true },
      { source: "/pricing", destination: "/system#scale", permanent: true },
      { source: "/book", destination: "/apply", permanent: true },
    ];
  },
};

export default nextConfig;
