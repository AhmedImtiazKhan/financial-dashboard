/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverComponents: true,
    ppr: 'incremental',
    // You can add other experimental features here
  },
};

export default nextConfig;
