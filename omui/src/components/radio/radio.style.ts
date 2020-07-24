import { BaseStyle, runIfFn, Sizes } from '@chakra-ui/theme-tools';
import { CheckboxStyle } from '../checkbox';

const register = {
  parts: ['control', 'label'],
  sizes: CheckboxStyle.register.sizes
} as const;

const baseStyle: BaseStyle<typeof register> = (props) => {
  const { label, control } = runIfFn(CheckboxStyle.baseStyle, props);
  return {
    label,
    control: {
      ...control,
      borderRadius: 'full',
      _checked: {
        ...control?.['_checked'],
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
    }
  };
};

const sizes: Sizes<typeof register> = {
  ...CheckboxStyle.sizes,
  sm: {
    control: { width: 3, height: 3 }
  }
};

const defaultProps = CheckboxStyle.defaultProps;

const radio = {
  register,
  defaultProps,
  baseStyle,
  sizes
};

export default radio;
