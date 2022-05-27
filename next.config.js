/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/pizza",
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
