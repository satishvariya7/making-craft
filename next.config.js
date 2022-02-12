const withPWA = require("next-pwa");
const STATUS = "NONE";
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

if (STATUS !== "PWA") {
  module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.resolve.fallback = { fs: false };
      config.plugins.push(new NodePolyfillPlugin());
      return config;
    },
  };
} else if (STATUS === "PWA") {
  module.exports = withPWA({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },
  });
}
