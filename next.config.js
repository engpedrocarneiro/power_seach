/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['www.vemia.com.br']
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig