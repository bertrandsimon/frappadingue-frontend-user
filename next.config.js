/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // SEO optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Enable static optimization
  swcMinify: true,
};

module.exports = nextConfig;
