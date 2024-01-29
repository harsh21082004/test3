/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: false,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs:false,
      net:false,
      dns:false,
      child_process:false,
      tls:false,
    }
    return config
  },
  experimental: {
    // Enable edge runtime
    runtime: 'edge',
  },
}
