export const convertRatios = (ratio: number | string) => {
  if (ratio === 'display') return 4 / 3;
  if (ratio === 'square') return 1;
  if (ratio === 'widescreen') return 16 / 9;

  return ratio;
};
