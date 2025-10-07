import type { NextConfig } from "next";

const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";
const isProd = process.env.NODE_ENV === "production";
const repo = "/portfolio";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },
  basePath: isGhPages && isProd ? repo : "",
  assetPrefix: isGhPages && isProd ? `${repo}/` : "",
};

export default nextConfig;
