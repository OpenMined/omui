// import { ComponentTheme } from '@chakra-ui/theme-tools';
import { CheckboxStyle } from '../checkbox';

const baseStyle = CheckboxStyle.baseStyle as any;

// TODO: remove the 'any' type
const Radio: any = {
  defaultProps: CheckboxStyle.defaultProps,
  // TODO: remove the 'any' type
  baseStyle: (props: any) => ({
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

export const RadioSizes = CheckboxStyle.sizes;

export default Radio;
