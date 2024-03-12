/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "priyankasaxenaclasses.com",
        port: "",
        pathname: "/wp-content/uploads/2024/01/**",
      },
      {
        hostname: "www.youtube.com",
      },
    ],
  },
};

export default nextConfig;
