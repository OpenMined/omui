import * as React from 'react';
import * as System from '../../omui';
import { ControlType, PropertyControls } from 'framer';

type Props = System.TooltipProps & {
  width: number;
  height: number;
  text: string;
  arrow: 'top' | 'right' | 'bottom' | 'left';
};

export class Tooltip extends React.Component<Props> {
  render() {
    const { text, ...props } = this.props;
    return <System.Tooltip {...props}>{text}</System.Tooltip>;
  }

  static defaultProps: Props = {
    width: 122,
    height: 24,
    text: 'This is a cool feature',
    arrow: 'left',
    error: false,
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: 'Text' },
    arrow: {
      type: ControlType.SegmentedEnum,
      options: ['top', 'right', 'bottom', 'left'],
      optionTitles: ['T', 'R', 'B', 'L'],
      title: 'Arrow',
    },
    error: { type: ControlType.Boolean, title: 'Error' },
  };
}
