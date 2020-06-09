import React from 'react';
import { Button as OMUIButton } from '../../omui';
import { ButtonProps } from '../../omui/types';
import { addPropertyControls, ControlType } from 'framer';
import themeHOC from '../utils/theme-hoc';
import {
  colors,
  borderRadius,
  boxShadow,
  typography,
  icons,
  stateful,
} from '../utils/prop-controls';

type Props = ButtonProps & {
  width: number;
  height: number;
  text: string;
};

const ProppedButton = (props: Props) => (
  <OMUIButton {...props} width="100%" height="100%">
    {props.text}
  </OMUIButton>
);

export const ButtonTiny = themeHOC(ProppedButton);
export const ButtonSmall = themeHOC(ProppedButton);
export const ButtonMedium = themeHOC(ProppedButton);
export const ButtonLarge = themeHOC(ProppedButton);

// TODO: Figure out defaultProps Typescript issue
// TODO: Auto-calculate these height and widths based on padding and text size
ButtonTiny.defaultProps = {
  width: 56,
  height: 24,
  size: 'xs',
};
ButtonSmall.defaultProps = {
  width: 69,
  height: 32,
  size: 'sm',
};
ButtonMedium.defaultProps = {
  width: 83,
  height: 40,
  size: 'md',
};
ButtonLarge.defaultProps = {
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
  variantColor: colors,
  variant: {
    type: ControlType.Enum,
    title: 'Variant',
    defaultValue: 'solid',
    options: ['solid', 'outline', 'ghost', 'link'],
  },
  borderRadius,
  boxShadow,
  ...typography,
  ...icons,
  ...stateful(['loading', 'active', 'disabled']),
  onClick: {
    type: ControlType.EventHandler,
  },
};

addPropertyControls(ButtonTiny, controls);
addPropertyControls(ButtonSmall, controls);
addPropertyControls(ButtonMedium, controls);
addPropertyControls(ButtonLarge, controls);
