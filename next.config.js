const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    deviceSizes: [640, 750, 828],
    imageSizes: [96, 198, 384],
    domains: [
      "github.com",
      "localmood-bucket.s3.amazonaws.com",
      "drive.google.com",
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
