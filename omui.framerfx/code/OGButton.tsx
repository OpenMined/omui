import * as React from 'react';
import * as OMUI from '../../omui';
import { addPropertyControls, ControlType } from 'framer';

type Props = OMUI.OGButtonProps & {
  width: number;
  height: number;
};

export const OGButton = (props: Props) => <OMUI.OGButton {...props} />;

OGButton.defaultProps = {
  width: 150,
  height: 48,
  disabled: false,
  fluid: true,
  text: 'Button',
};

addPropertyControls(OGButton, {
  text: { type: ControlType.String, title: 'Text' },
  kind: {
    type: ControlType.Enum,
    options: ['default', 'primary', 'danger'],
    optionTitles: ['Default', 'Primary', 'Danger'],
  },
  disabled: { type: ControlType.Boolean, title: 'Disabled' },
  fluid: { type: ControlType.Boolean, title: 'Fluid' },
});
