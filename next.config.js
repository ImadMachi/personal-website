/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  eslint: {
    dirs: ["src"],
  },
};

module.exports = nextConfig
