module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: false,
  images: {
    domains: [
      "media.istockphoto.com",
      "cdn.pixabay.com",
      "a.cdn-hotels.com",
      "github.com",
      "localmood-bucket.s3.amazonaws.com",
    ],
  },
};
