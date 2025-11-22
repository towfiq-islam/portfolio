let domain = "example.com";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: domain,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
