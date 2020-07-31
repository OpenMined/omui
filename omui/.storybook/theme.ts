import { create } from '@storybook/theming';

import logo from './logo.png';
import { fonts } from '../src/theme/foundations/typography';
import { colors, alphas } from '../src/theme/foundations/colors';

export default create({
  // Base
  base: 'light',

  // Colors
  colorPrimary: colors.teal['500'],
  colorSecondary: colors.blue['500'],

  // Typography
  fontBase: fonts.body,
  fontCode: fonts.mono,

  // Text colors
  textColor: colors.gray['900'],
  textInverseColor: alphas.blackAlpha['800'],

  // Brand
  brandTitle: 'OpenMined',
  brandUrl: 'https://openmined.org',
  brandImage: logo
});
