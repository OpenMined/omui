import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

// @ts-ignore
import logo from './logo.png';
import { fonts } from '../src/theme/foundations/typography';
import { colors, base, alphas } from '../src/theme/foundations/colors';

const storybookTheme = create({
  // Base
  base: 'light',

  // Colors
  colorPrimary: colors.teal['500'],
  colorSecondary: colors.blue['500'],

  // Typography
  fontBase: fonts.body,
  fontCode: fonts.mono,

  // Text colors
  textColor: base.black,
  textInverseColor: alphas.blackAlpha['800'],

  // Brand
  brandTitle: 'OpenMined',
  brandUrl: 'https://openmined.org',
  brandImage: logo
});

addons.setConfig({
  theme: storybookTheme,
  panelPosition: 'right',
  selectedPanel: 'storybookjs/knobs/panel'
});
