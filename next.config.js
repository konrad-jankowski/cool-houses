/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    domains: ["sloneczne-chatki.pl", "thumbs.hotelsystems.pl"],
  },
};

module.exports = nextConfig;
