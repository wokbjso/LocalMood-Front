module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
    experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "media.istockphoto.com",
      "cdn.pixabay.com",
      "a.cdn-hotels.com",
      "github.com",
    ],
  },
};
