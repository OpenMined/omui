import { theme as defaultTheme } from '@chakra-ui/core';

import { borders } from './borders';
import { base, alphas, colors, thirdParty } from './colors';
import { opacities } from './opacities';
import { radii } from './radii';
import { shadows } from './shadows';
import { breakpoints, containers, sizes, largeSizes } from './sizes';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './typography';
import { zIndices } from './z-indices';

export default {
  borders,
  breakpoints,
  colors: {
    ...base,
    ...alphas,
    ...colors,
    ...thirdParty,
  },
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  icons: defaultTheme.icons,
  opacity: opacities,
  radii,
  shadows,
  sizes: {
    containers,
    ...sizes,
    ...largeSizes,
  },
  space: sizes,
  zIndices,
};
