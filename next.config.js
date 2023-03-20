/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
})

module.exports = nextConfig
