import { borders } from './borders';
import { base, alphas, colors, thirdParty } from './colors';
import { opacities } from './opacities';
import { radii } from './radius';
import { shadows } from './shadows';
import { breakpoints, containers, sizes, largeSizes } from './sizes';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights
} from './typography';
import { zIndices } from './z-index';

export default {
  borders,
  breakpoints,
  colors: {
    ...base,
    ...alphas,
    ...colors,
    ...thirdParty
  },
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity: opacities,
  radii,
  shadows,
  sizes: {
    containers,
    ...sizes,
    ...largeSizes
  },
  space: sizes,
  zIndices
};
