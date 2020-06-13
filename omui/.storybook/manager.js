import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import { fonts } from '../src/theme/typography';

const storybookTheme = create({
  // Base
  base: 'light',

  // Colors
  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: fonts.body,
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  // Brand
  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150'
});

addons.setConfig({
  theme: storybookTheme,
  panelPosition: 'right',
  selectedPanel: 'storybookjs/knobs/panel'
});
