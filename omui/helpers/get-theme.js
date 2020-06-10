import { colors, thirdParty } from '../theme/colors';

export const themeSizes = ['xs', 'sm', 'md', 'lg'];

export const themeButtonColors = [].concat(
  Object.keys(colors),
  Object.keys(thirdParty)
);

export const themeButtonVariants = ['solid', 'ghost', 'outline', 'link'];

export const themeAlertStatuses = ['error', 'warning', 'success', 'info'];
export const themeAlertVariants = [
  'subtle',
  'solid',
  'left-accent',
  'top-accent',
];
