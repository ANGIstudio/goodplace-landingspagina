/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  basePath: '',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/charity-application/',
        destination: 'https://forms.gle/b9Bvk3xo4rZhazT96',
        permanent: false
      }
    ];
  },
});
