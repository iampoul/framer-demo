/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com','cloudflare-ipfs.com','shop.sport24.dk'],
  }
}

module.exports = nextConfig
