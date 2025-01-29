/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    domains: ["localhost", "https://shema1king.netlify.app/"], // Replace with your actual Netlify domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|mp3)$/i,
      type: "asset/resource",
    })
    return config
  },
}

module.exports = nextConfig

        
