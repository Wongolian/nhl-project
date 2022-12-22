/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '-league.nhlstatic.com',
        pathname: 'images/logos/league-dark/**',
      }
    ],
  },
}
