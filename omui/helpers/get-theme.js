import { colors, thirdParty } from '../theme/colors';

export const themeSizes = ['xs', 'sm', 'md', 'lg'];

export const themeColors = [].concat(
  Object.keys(colors),
  Object.keys(thirdParty)
);

export const themeButtonVariants = ['solid', 'ghost', 'outline', 'link'];
