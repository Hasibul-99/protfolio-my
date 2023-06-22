/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["maath", "react-tilt"],
  i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
