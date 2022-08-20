/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "avatars.dicebear.com",
      "images.pexels.com",
      "platform-lookaside.fbsbx.com",
      "static.xx.fbcdn.net",
      "lh3.googleusercontent.com",
      "github.com"
    ],
  },
};

module.exports = nextConfig;
