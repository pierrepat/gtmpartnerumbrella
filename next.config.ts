import type { NextConfig } from "next";

// All redirects are 301s. statusCode instead of permanent, because permanent
// would emit a 308. The Netlify Next runtime serves these as-is, including
// the external plaintiffpilot.com targets, so netlify.toml stays build only.

// AI intake, follow-up and reactivation content lives on plaintiffpilot.com.
// TODO(Pierre): point at the matching PlaintiffPilot page once its sitemap
// is confirmed. Today it has no /reactivation or /intake route. Browsers
// carry the hash across, so /system#recover lands on plaintiffpilot.com/#recover.
const PP = "https://plaintiffpilot.com/";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/reactivation", destination: PP, statusCode: 301 },
      { source: "/database-reactivation", destination: PP, statusCode: 301 },
      { source: "/ai", destination: PP, statusCode: 301 },
      { source: "/ai-followup", destination: PP, statusCode: 301 },
      { source: "/intake", destination: PP, statusCode: 301 },
      { source: "/system", destination: PP, statusCode: 301 },
      { source: "/system/:path*", destination: PP, statusCode: 301 },
      { source: "/recover", destination: PP, statusCode: 301 },
      { source: "/scale", destination: PP, statusCode: 301 },
      { source: "/pricing", destination: PP, statusCode: 301 },
      // Removed pages that were not about AI or reactivation.
      { source: "/about", destination: "/", statusCode: 301 },
      { source: "/contact", destination: "/", statusCode: 301 },
      { source: "/outbound", destination: "/#track-record", statusCode: 301 },
      { source: "/outbound/:path*", destination: "/#track-record", statusCode: 301 },
      // Booking shortcut stays.
      { source: "/book", destination: "/apply", statusCode: 301 },
    ];
  },
};

export default nextConfig;
