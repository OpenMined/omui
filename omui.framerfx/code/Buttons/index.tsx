import * as React from 'react';
import * as OMUI from '../../../omui';
import { addPropertyControls, ControlType } from 'framer';
import { themeHOC } from '../../utils/theme-hoc';
import theme from '../../../omui/theme';

type Props = OMUI.ButtonProps & {
  width: number;
  height: number;
  text: string;
};

const ProppedButton = (props: Props) => (
  <OMUI.Button {...props} width="100%" height="100%">
    {props.text}
  </OMUI.Button>
);

export const ExtraSmallButton = themeHOC(ProppedButton);
export const SmallButton = themeHOC(ProppedButton);
export const MediumButton = themeHOC(ProppedButton);
export const LargeButton = themeHOC(ProppedButton);

// TODO: Figure out these TS errors
// TODO: Auto-calculate these height and widths based on padding and text size
ExtraSmallButton.defaultProps = {
  width: 56,
  height: 24,
  size: 'xs',
};
SmallButton.defaultProps = {
  width: 69,
  height: 32,
  size: 'sm',
};
MediumButton.defaultProps = {
  width: 83,
  height: 40,
  size: 'md',
};
LargeButton.defaultProps = {
  width: 105,
  height: 48,
  size: 'lg',
};

const controls: object = {
  text: {
    type: ControlType.String,
    title: 'Text',
    defaultValue: 'Button',
  },
  variantColor: {
    type: ControlType.Enum,
    title: 'Color',
    options: Object.keys(theme.colors),
  },
  variant: {
    type: ControlType.Enum,
    title: 'Variant',
    defaultValue: 'solid',
    options: ['solid', 'outline', 'ghost', 'link'],
  },
  borderRadius: {
    type: ControlType.Enum,
    title: 'Radius',
    defaultValue: 'md',
    options: Object.keys(theme.radii),
  },
  boxShadow: {
    type: ControlType.Enum,
    title: 'Shadow',
    defaultValue: 'none',
    options: Object.keys(theme.shadows),
  },
  fontFamily: {
    type: ControlType.Enum,
    title: 'Font',
    defaultValue: 'body',
    options: Object.keys(theme.fonts),
  },
  fontWeight: {
    type: ControlType.Enum,
    title: 'Weight',
    defaultValue: 'semibold',
    options: Object.keys(theme.fontWeights),
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
  isLoading: {
    type: ControlType.Boolean,
    title: 'Loading',
    defaultValue: false,
  },
  isActive: {
    type: ControlType.Boolean,
    title: 'Active',
    defaultValue: false,
  },
  isDisabled: {
    type: ControlType.Boolean,
    title: 'Disabled',
    defaultValue: false,
  },
  onClick: {
    type: ControlType.EventHandler,
  },
};

addPropertyControls(ExtraSmallButton, controls);
addPropertyControls(SmallButton, controls);
addPropertyControls(MediumButton, controls);
addPropertyControls(LargeButton, controls);
