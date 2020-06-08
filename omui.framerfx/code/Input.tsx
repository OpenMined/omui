import * as React from 'react';
import * as System from '../../omui';
import { ControlType, PropertyControls } from 'framer';

type Props = System.InputProps & {
  width: number;
  height: number;
};

type State = {
  value?: string;
};

export class Input extends React.Component<Props, State> {
  state = {
    value: null,
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <System.Input
        {...this.props}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }

  static defaultProps: Props = {
    width: 150,
    height: 50,
    disabled: false,
    error: false,
    placeholder: 'Email',
  };

  static propertyControls: PropertyControls<Props> = {
    placeholder: { type: ControlType.String, title: 'Placeholder' },
    disabled: { type: ControlType.Boolean, title: 'Disabled' },
    error: { type: ControlType.Boolean, title: 'Error' },
  };
}
