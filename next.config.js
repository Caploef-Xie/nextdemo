/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/contracts' },
      '/contracts': { page: '/contracts' },
    }
  },
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig
