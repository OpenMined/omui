import { colors, thirdParty, base, alphas } from './foundations/colors';

import {
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  textTransformations
} from './foundations/typography';

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

export const filteredColors = (colors: number[]) => {
  return themeColors.filter((c) =>
    colors.some(function (colorNumber) {
      return c.endsWith(colorNumber.toString());
    })
  );
};

export const fromBaseColor = (c: string) => c + '.500';

export const themeColors = [
  ...Object.keys(base),
  ...getAllColorKeys(alphas),
  ...getAllColorKeys(colors)
];

export const themeBaseColors = [...Object.keys(colors)];

export const themeFlexDirections = [
  'row',
  'row-reverse',
  'column',
  'column-reverse'
];

export const themeFlexAlignItems = [
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'stretch'
];

export const themeFlexJustifyContent = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly'
];

export const themeBaseAlignments = ['start', 'center', 'end'];

export const themePlacements = ['top', 'right', 'bottom', 'left'];

export const themeAllPlacements = [
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end'
];

// Code Languages
export const themeCodeLanguages = [
  'markup',
  'css',
  'javascript',
  'bash',
  'c',
  'csharp',
  'cpp',
  'clojure',
  'docker',
  'erlang',
  'git',
  'go',
  'graphql',
  'java',
  'json',
  'julia',
  'kotlin',
  'latex',
  'markdown',
  'objectivec',
  'python',
  'r',
  'rust',
  'jsx',
  'tsx',
  'swift',
  'typescript',
  'wasm'
];

export const themeCodePrettyLanguages = [
  'HTML, XML, SVG',
  'CSS',
  'Javascript',
  'Bash',
  'C',
  'C#',
  'C++',
  'Clojure',
  'Docker',
  'Erlang',
  'Git',
  'Go',
  'GraphQL',
  'Java',
  'JSON',
  'Julia',
  'Kotlin',
  'LaTeX',
  'Markdown',
  'Objective-C',
  'Python',
  'R',
  'Rust',
  'JSX (React Javascript)',
  'TSX (React Typescript)',
  'Swift',
  'Typescript',
  'WebAssembly'
];

export const themeHeadingFontSizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
export const themeHeadingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const themeFontFamilies = Object.keys(fonts);
export const themeFontSizes = Object.keys(fontSizes);
export const themeFontWeights = Object.keys(fontWeights);
export const themeLetterSpacings = Object.keys(letterSpacings);
export const themeLineHeights = Object.keys(lineHeights);
export const themeTextTransformations = Object.keys(textTransformations);

export const themeDefaultColorMap = {
  blue: '500',
  magenta: '400',
  red: '400',
  orange: '700',
  yellow: '800',
  green: '700',
  teal: '600',
  cyan: '800',
  indigo: '400',
  violet: '400',
  gray: '800'
};
