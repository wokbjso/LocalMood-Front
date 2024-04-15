module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 785],
    imageSizes: [16, 48, 96, 128, 256, 385],
    domains: [
      "media.istockphoto.com",
      "cdn.pixabay.com",
      "a.cdn-hotels.com",
      "github.com",
      "localmood-bucket.s3.amazonaws.com",
    ],
  },
};
