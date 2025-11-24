/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: false,
      minify: true,
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: true,
  experimental: { esmExternals: true },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
};

// module.exports
export default nextConfig;
