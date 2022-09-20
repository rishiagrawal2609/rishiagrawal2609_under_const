/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/theGobindSingh",
  assetPrefix: "/theGobindSingh",
};

module.exports = nextConfig;
