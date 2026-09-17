import type { NextConfig } from "next";

// Production redirects are 301s in netlify.toml. This mirror keeps `next dev`
// in step with them (Next emits 308 here, which is fine locally).
const PP = "https://plaintiffpilot.com/";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/reactivation", destination: PP, permanent: true },
      { source: "/database-reactivation", destination: PP, permanent: true },
      { source: "/ai", destination: PP, permanent: true },
      { source: "/ai-followup", destination: PP, permanent: true },
      { source: "/intake", destination: PP, permanent: true },
      { source: "/system", destination: PP, permanent: true },
      { source: "/system/:path*", destination: PP, permanent: true },
      { source: "/recover", destination: PP, permanent: true },
      { source: "/scale", destination: PP, permanent: true },
      { source: "/pricing", destination: PP, permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/outbound", destination: "/", permanent: true },
      { source: "/outbound/:path*", destination: "/", permanent: true },
      { source: "/book", destination: "/apply", permanent: true },
    ];
  },
};

export default nextConfig;
