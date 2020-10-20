export const convertRatios = (ratio: number | string) => {
  if (ratio === 'display') return 4 / 3;
  if (ratio === 'square') return 1;
  if (ratio === 'widescreen') return 16 / 9;
  if (ratio === '2:3') return 2 / 3;
  if (ratio === '3:2') return 3 / 2;
  if (ratio === '3:4') return 3 / 4;
  if (ratio === '4:5') return 4 / 5;
  if (ratio === '5:4') return 5 / 4;
  if (ratio === '9:16') return 9 / 16;

  return ratio;
};
