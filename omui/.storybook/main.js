const configureTypescript = (config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader')
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};

module.exports = {
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
    '@storybook/addon-links/register'
  ],
  stories: ['../src/**/*.stories.(js|mdx)'],
  webpackFinal: async (config) => configureTypescript(config),
  managerWebpack: async (config) => configureTypescript(config)
};
