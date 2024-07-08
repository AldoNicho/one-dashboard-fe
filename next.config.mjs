/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["my-one-dashboard-be-4a28e29e76c3.herokuapp.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://my-one-dashboard-be-4a28e29e76c3.herokuapp.com/:path*",
      },
    ];
  },
};

export default nextConfig;
