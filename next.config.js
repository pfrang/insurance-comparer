/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  images: {
    domains: [
      "img.etimg.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      'm.media-amazon.com'
    ],
  },
}

module.exports = nextConfig
