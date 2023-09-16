module.exports = function (context, options) {
  return {
    name: 'tech-writer-webpack-plugin',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.ya?ml$/,
              use: 'yaml-loader',
            },
          ],
        },
      };
    },
  };
};
