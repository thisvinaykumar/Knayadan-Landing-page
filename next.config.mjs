/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: nginx serves out/ from /var/www/shubhsaathi-foundation (no Node process on the box).
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
