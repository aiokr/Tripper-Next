const { withContentlayer } = require('next-contentlayer');
module.exports = withContentlayer({
  /* 其他配置 */
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['imgur.lzmun.com','ooo.0o0.ooo'],
  },
});