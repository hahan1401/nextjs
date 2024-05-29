/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    after: true,
  },
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
