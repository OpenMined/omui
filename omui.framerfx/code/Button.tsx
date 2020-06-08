import * as React from 'react';
import * as OMUI from '../../omui';
import { addPropertyControls, ControlType } from 'framer';

type Props = OMUI.ButtonProps & {
  width: number;
  height: number;
};

export const Button = (props: Props) => <OMUI.Button {...props} />;

Button.defaultProps = {
  width: 150,
  height: 48,
  disabled: false,
  fluid: true,
  text: 'Button',
};

addPropertyControls(Button, {
  text: { type: ControlType.String, title: 'Text' },
  kind: {
    type: ControlType.Enum,
    options: ['default', 'primary', 'danger'],
    optionTitles: ['Default', 'Primary', 'Danger'],
  },
  disabled: { type: ControlType.Boolean, title: 'Disabled' },
  fluid: { type: ControlType.Boolean, title: 'Fluid' },
});
