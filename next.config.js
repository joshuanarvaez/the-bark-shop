/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SANITY_TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_STRIPE_SECRET_KEY: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
  },
};

module.exports = nextConfig