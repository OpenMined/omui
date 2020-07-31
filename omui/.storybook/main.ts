module.exports = {
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
    '@storybook/addon-links'
  ],
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)']
};
