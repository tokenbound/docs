/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

//module.exports = nextConfig;
module.exports = withNextra({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      },
    ],
  },
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
