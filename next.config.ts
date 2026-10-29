import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits a self-contained `out/` folder that
  // can be uploaded to any static host (Serverbyt / cPanel / Nginx / S3).
  output: "export",

  // Static hosting has no Node.js image-optimization service, so next/image
  // must serve the (already correctly sized, local) assets as-is.
  images: { unoptimized: true },

  // Emit `/about/index.html`-style output so clean URLs (/about/) resolve on
  // Apache & Nginx out of the box (DirectoryIndex / try_files) — no rewrite
  // rules required on shared hosting.
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: false,
};

export default nextConfig;