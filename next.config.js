/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "bit.ly", "rb.gy"],
  },
};

module.exports = nextConfig;
