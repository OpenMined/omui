import { ControlType } from 'framer';

import theme from '../../omui/theme';
import { colors as brandColors, thirdParty } from '../../omui/theme/colors';

export const colors = {
  type: ControlType.Enum,
  title: 'Color',
  defaultValue: 'blue',
  options: [].concat(Object.keys(brandColors), Object.keys(thirdParty)),
};

export const typography = {
  fontFamily: {
    type: ControlType.Enum,
    title: 'Font',
    defaultValue: 'body',
    options: Object.keys(theme.fonts),
  },
  fontSize: {
    type: ControlType.Enum,
    title: 'Size',
    defaultValue: 'md',
    options: Object.keys(theme.fontSizes),
  },
  fontWeight: {
    type: ControlType.Enum,
    title: 'Weight',
    defaultValue: 'normal',
    options: Object.keys(theme.fontWeights),
  },
  fontStyle: {
    type: ControlType.Enum,
    title: 'Style',
    defaultValue: 'normal',
    options: ['normal', 'italic'],
  },
  letterSpacing: {
    type: ControlType.Enum,
    title: 'Spacing',
    defaultValue: 'normal',
    options: Object.keys(theme.letterSpacings),
  },
  textTransform: {
    type: ControlType.Enum,
    title: 'Transform',
    defaultValue: 'none',
    options: ['uppercase', 'lowercase', 'capitalize', 'none'],
  },
};

export const borderRadius = {
  type: ControlType.Enum,
  title: 'Radius',
  defaultValue: 'md',
  options: Object.keys(theme.radii),
};

export const boxShadow = {
  type: ControlType.Enum,
  title: 'Shadow',
  defaultValue: 'none',
  options: Object.keys(theme.shadows),
};

export const icons = {
  leftIcon: {
    type: ControlType.String,
    title: 'Left Icon',
    defaultValue: '', // TODO: Fill these in as enum
  },
  rightIcon: {
    type: ControlType.String,
    title: 'Right Icon',
    defaultValue: '', // TODO: Fill these in as enum
  },
};

export const stateful = (types: string[]) => {
  const final = {};

  types.forEach((type: string) => {
    const upperType: string = type.charAt(0).toUpperCase() + type.slice(1);

    final[`is${upperType}`] = {
      type: ControlType.Boolean,
      title: upperType,
      defaultValue: false,
    };
  });

  return final;
};
