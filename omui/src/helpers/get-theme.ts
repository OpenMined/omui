import { colors, thirdParty } from '../theme/colors';

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
