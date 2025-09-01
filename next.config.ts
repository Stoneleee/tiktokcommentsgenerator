import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://se-data-us-oss.oss-us-west-1.aliyuncs.com/**"),
      new URL("https://*.dicebear.com/**"),
    ],
  },
};

export default nextConfig;
