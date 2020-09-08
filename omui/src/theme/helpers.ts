import { colors, thirdParty, base, alphas } from './foundations/colors';

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
