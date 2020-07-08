import { ComponentTheme } from '@chakra-ui/theme-tools';
import { CheckboxStyle, CheckboxSizes } from '../checkbox';

const baseStyle = CheckboxStyle.baseStyle as any;

const Radio: ComponentTheme = {
  defaultProps: CheckboxStyle.defaultProps,
  baseStyle: (props) => ({
    Control: {
      ...baseStyle(props).Control,
      borderRadius: 'full',
      _checked: {
        ...baseStyle(props).Control['_checked'],
        _before: {
          content: `""`,
          display: 'inline-block',
          position: 'relative',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          bg: 'current'
        }
      }
    },
    Label: baseStyle(props).Label
  }),
  sizes: {
    ...CheckboxStyle.sizes,
    sm: {
      Control: {
        width: 3,
        height: 3
      }
    }
  }
};

export const RadioSizes = CheckboxSizes;

export default Radio;
