/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // it should be false by default
  experimental: {
    reactRoot: true,
  },
  images: {
    domains: ["imagedelivery.net"],
  },
};

module.exports = nextConfig;
