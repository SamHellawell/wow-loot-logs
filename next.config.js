const CopyPlugin = require('copy-webpack-plugin');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: debug ? '' : '/wow-loot-logs/',
  experimental: {
    basePath: '/wow-loot-logs',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: "empty"
    };

    config.plugins.push(new CopyPlugin([
      // This wasm file will be fetched dynamically when we initialize sql.js
      // It is important that we do not change its name, and that it is in the same folder as the js
      { from: 'node_modules/sql.js/dist/sql-wasm.wasm', to: 'public' },
    ]));

    config.module.rules.push({
      test: /\.db$/i,
      use: 'arraybuffer-loader',
    });

    return config
  },
}
