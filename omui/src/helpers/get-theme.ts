import { colors, thirdParty, base, alphas } from '../theme/foundations/colors';
import {
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights
} from '../theme/foundations/typography';
import { InputVariants } from '../components/input';
import { TagSizes, TagVariants } from '../components/tag';
import { SwitchSizes } from '../components/switch';
import { SpinnerSizes } from '../components/spinner';
import { SliderSizes } from '../components/slider';
import { TabVariants, TabSizes } from '../components/tabs';
import { IconSize } from '../components/icon';
import { SelectSizes, SelectVariants } from '../components/select';
import { ProgressSizes } from '../components/progress';

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

// Flex
export const themeFlexDirection = [
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

// Heading
export const themeHeadingFontSizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
export const themeHeadingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

// Icon
export const themeIconSizes = Object.keys(IconSize);

// Input
export const themeInputVariants = Object.keys(InputVariants);

// Progress
export const themeProgressSizes = Object.keys(ProgressSizes);
export const themeProgressColors = themeButtonColors;

// Radio
export const themeRadioColors = themeCheckboxColors;

// Select
export const themeSelectSizes = Object.keys(SelectSizes);
export const themeSelectVariants = Object.keys(SelectVariants);

// Slider
export const themeSliderColors = Object.keys(colors);
export const themeSliderSizes = Object.keys(SliderSizes);

// Spinner
export const themeSpinnerColors = themeAllPossibleColors;
export const themeSpinnerSizes = Object.keys(SpinnerSizes);

// Switch
export const themeSwitchColors = themeButtonColors;
export const themeSwitchSizes = Object.keys(SwitchSizes);

// Tabs
export const themeTabsVariants = Object.keys(TabVariants);
export const themeTabsSizes = Object.keys(TabSizes);
export const themeTabsColors = themeButtonColors;
export const themeTabsAlignment = ['start', 'center', 'end'];

// Tag
export const themeTagSizes = Object.keys(TagSizes);
export const themeTagVariants = Object.keys(TagVariants);
export const themeTagColors = themeButtonColors;

// Text
export const themeFontFamilies = Object.keys(fonts);
export const themeFontSizes = Object.keys(fontSizes);
export const themeFontWeights = Object.keys(fontWeights);
export const themeLetterSpacings = Object.keys(letterSpacings);
export const themeLineHeights = Object.keys(lineHeights);

// Textarea
export const themeTextareaResize = ['none', 'vertical', 'horizontal', 'both'];

// Toast
export const themeToastStatuses = themeAlertStatuses;
export const themeToastPositions = [
  'top',
  'top-left',
  'top-right',
  'bottom',
  'bottom-left',
  'bottom-right'
];

// Tooltip
export const themeTooltipPlacements = [
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
