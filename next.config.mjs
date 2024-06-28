/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.icons8.com", "cdn.sanity.io"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "",
    //     port: "",
    //     pathname: "/u/**",
    //   },
    // ],
  }
};

export default nextConfig;
