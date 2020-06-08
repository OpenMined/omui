import * as React from 'react';
import * as System from '../../omui';
import { ControlType, PropertyControls } from 'framer';

type Props = System.ToggleProps & {
  width: number;
  height: number;
};

type State = {
  on?: boolean;
};

export class Toggle extends React.Component<Props, State> {
  state = {
    on: false,
  };

  handleClick = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    return (
      <System.Toggle
        {...this.props}
        on={this.state.on}
        onClick={this.handleClick}
      />
    );
  }

  static defaultProps: Props = {
    width: 64,
    height: 36,
    disabled: false,
  };

  static propertyControls: PropertyControls<Props> = {
    disabled: { type: ControlType.Boolean, title: 'Disabled' },
  };
}
