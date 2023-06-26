/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/v1/lending',
        destination: 'http://194.58.109.74/api/v1/lending',
      },
    ]
  },
}

module.exports = nextConfig
