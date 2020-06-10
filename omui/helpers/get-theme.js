import { containers } from '../theme/sizes';
import { colors, thirdParty } from '../theme/colors';

// Alert
export const themeAlertStatuses = ['error', 'warning', 'success', 'info'];
export const themeAlertVariants = [
  'subtle',
  'solid',
  'left-accent',
  'top-accent',
];

// Button
export const themeButtonSizes = Object.keys(containers);
export const themeButtonColors = [].concat(
  Object.keys(colors),
  Object.keys(thirdParty)
);
export const themeButtonVariants = ['solid', 'ghost', 'outline', 'link'];
