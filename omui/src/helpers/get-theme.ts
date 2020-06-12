import { colors, thirdParty, base, alphas } from '../theme/colors';

const getAllColorKeys = (c: object) =>
  Object.keys(c)
    .map((color) => {
      const allShades = Object.keys(c[color]);
      const colorTypes = allShades.map((shade) => `${color}.${shade}`);
      return colorTypes;
    })
    .flat();

export const allPossibleColors = [
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

// Box
export const themeBoxColors = allPossibleColors;

// Button
export const themeIconButtonSizes = ['sm', 'md', 'lg'];
export const themeButtonSizes = ['xs', 'sm', 'md', 'lg'];
export const themeButtonColors = [
  ...Object.keys(colors),
  ...Object.keys(thirdParty)
];
export const themeButtonVariants = ['solid', 'ghost', 'outline', 'link'];
