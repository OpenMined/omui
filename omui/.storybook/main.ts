module.exports = {
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
    '@storybook/addon-links/register'
  ],
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)']
};
