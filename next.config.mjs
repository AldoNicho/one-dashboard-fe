/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["one-dashboard-be-784b7694ba8f.herokuapp.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://one-dashboard-be-784b7694ba8f.herokuapp.com/:path*",
      },
    ];
  },
};

export default nextConfig;
