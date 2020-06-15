import { colors, thirdParty, base, alphas } from '../theme/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights
} from '../theme/typography';

const getAllColorKeys = (c: object) =>
  Object.keys(c)
    .map((color) => {
      const allShades = Object.keys(c[color]);
      const colorTypes = allShades.map((shade) => `${color}.${shade}`);
      return colorTypes;
    })
    .flat();

export const themeAllPossibleColors = [
  ...Object.keys(base),
  ...getAllColorKeys(alphas),
  ...getAllColorKeys(colors),
  ...getAllColorKeys(thirdParty)
];

// Alert
export const themeAlertStatuses = ['error', 'warning', 'success', 'info'];
export const themeAlertVariants = [
  'subtle',
  'solid',
  'left-accent',
  'top-accent'
];

// Avatar
export const themeAvatarSizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];

// Badge
export const themeBadgeColors = Object.keys(colors);
export const themeBadgeVariants = ['solid', 'subtle', 'outline'];

// Button
export const themeIconButtonSizes = ['sm', 'md', 'lg'];
export const themeButtonSizes = ['xs', 'sm', 'md', 'lg'];
export const themeButtonColors = [
  ...Object.keys(colors),
  ...Object.keys(thirdParty)
];
export const themeButtonVariants = ['solid', 'ghost', 'outline', 'link'];

// Heading
export const themeHeadingFontSizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
export const themeHeadingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

// Text
export const themeFontFamilies = Object.keys(fonts);
export const themeFontSizes = Object.keys(fontSizes);
export const themeFontWeights = Object.keys(fontWeights);
export const themeLetterSpacings = Object.keys(letterSpacings);
export const themeLineHeights = Object.keys(lineHeights);
