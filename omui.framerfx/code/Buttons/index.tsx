import * as React from 'react';
import * as OMUI from '../../../omui';
import * as OMUITypes from '../../../omui/types';
import { addPropertyControls, ControlType } from 'framer';
import { themeHOC } from '../../utils/theme-hoc';
import {
  colors,
  borderRadius,
  boxShadow,
  typography,
  icons,
  stateful,
} from '../../utils/prop-controls';

type Props = OMUITypes.ButtonProps & {
  width: number;
  height: number;
  text: string;
};

const ProppedButton = (props: Props) => (
  <OMUI.Button {...props} width="100%" height="100%">
    {props.text}
  </OMUI.Button>
);

export const Tiny = themeHOC(ProppedButton);
export const Small = themeHOC(ProppedButton);
export const Medium = themeHOC(ProppedButton);
export const Large = themeHOC(ProppedButton);

// TODO: Figure out defaultProps Typescript issue
// TODO: Auto-calculate these height and widths based on padding and text size
Tiny.defaultProps = {
  width: 56,
  height: 24,
  size: 'xs',
};
Small.defaultProps = {
  width: 69,
  height: 32,
  size: 'sm',
};
Medium.defaultProps = {
  width: 83,
  height: 40,
  size: 'md',
};
Large.defaultProps = {
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

addPropertyControls(Tiny, controls);
addPropertyControls(Small, controls);
addPropertyControls(Medium, controls);
addPropertyControls(Large, controls);
