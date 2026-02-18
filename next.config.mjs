/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL("https://s3.milkyano.com/**")
    ]
  }
};

export default nextConfig;
