import * as React from 'react';
import * as OMUI from '../../omui';
import { addPropertyControls, ControlType } from 'framer';
import { themeHOC } from '../utils/theme-hoc';

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

export const Button = themeHOC(ProppedButton);

Button.defaultProps = {
  width: 150,
  height: 48,
};

addPropertyControls(Button, {
  // kind: {
  //   type: ControlType.Enum,
  //   options: ['default', 'primary', 'danger'],
  //   optionTitles: ['Default', 'Primary', 'Danger'],
  // }
  text: {
    type: ControlType.String,
    title: 'Text',
    defaultValue: 'Button',
  },
  size: {
    type: ControlType.Enum,
    title: 'Size',
    defaultValue: 'md',
    options: ['xs', 'sm', 'md', 'lg'],
    optionTitles: ['Extra small', 'Small', 'Medium', 'Large'],
  },
  variantColor: {
    type: ControlType.String,
    title: 'Color',
    defaultValue: 'green',
  },
  onClick: {
    type: ControlType.EventHandler,
  },
});
