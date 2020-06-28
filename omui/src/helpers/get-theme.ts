import { colors, thirdParty, base, alphas } from '../theme/foundations/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights
} from '../theme/foundations/typography';

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

// Checkbox
export const themeCheckboxColors = Object.keys(colors);

// Code
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

// Drawer
export const themeDrawerPlacements = ['top', 'right', 'bottom', 'left'];
export const themeDrawerSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];

// Heading
export const themeHeadingFontSizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
export const themeHeadingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

// Text
export const themeFontFamilies = Object.keys(fonts);
export const themeFontSizes = Object.keys(fontSizes);
export const themeFontWeights = Object.keys(fontWeights);
export const themeLetterSpacings = Object.keys(letterSpacings);
export const themeLineHeights = Object.keys(lineHeights);
