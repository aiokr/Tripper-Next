const { withContentlayer } = require('next-contentlayer');
module.exports = withContentlayer({
  /* 其他配置 */
  experimental: {
    serverActions: true,
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.lzmun.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.tripper.press',
      },
      {
        protocol: 'https',
        hostname: 'ooo.0o0.ooo',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }, {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
});