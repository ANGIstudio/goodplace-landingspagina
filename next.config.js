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
        source: '/tab',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tab/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tabs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tabs/:slug',
        destination: '/',
        permanent: true,
      },
    ];
  },
});
