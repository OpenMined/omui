import * as React from 'react';
import * as System from '../../omui';
import { ControlType, PropertyControls } from 'framer';

type Props = System.ButtonProps & {
  width: number;
  height: number;
};

export class Button extends React.Component<Props> {
  render() {
    return <System.Button {...this.props} />;
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
    disabled: false,
    fluid: true,
    text: 'Button',
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: 'Text' },
    kind: {
      type: ControlType.Enum,
      options: ['default', 'primary', 'danger'],
      optionTitles: ['Default', 'Primary', 'Danger'],
    },
    disabled: { type: ControlType.Boolean, title: 'Disabled' },
    fluid: { type: ControlType.Boolean, title: 'Fluid' },
  };
}
