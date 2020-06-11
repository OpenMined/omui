module.exports = {
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport/register",
  ],
  stories: ["../stories/**/*.stories.js", "../stories/**/*.stories.jsx"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
