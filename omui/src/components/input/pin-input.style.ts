import { Sizes } from '@chakra-ui/theme-tools';
import { InputStyle } from '../input';

const register = {
  parts: ['field'],
  sizes: InputStyle.register.sizes,
  variants: InputStyle.register.variants
} as const;

const baseStyle = InputStyle.baseStyle;

const variants = InputStyle.variants;

const sizes: Sizes<typeof register> = {
  lg: {
    field: {
      fontSize: 'lg',
      width: 12,
      height: 12,
      borderRadius: 'md'
    }
  },
  md: {
    field: {
      fontSize: 'md',
      width: 10,
      height: 10,
      borderRadius: 'md'
    }
  },
  sm: {
    field: {
      fontSize: 'sm',
      width: 8,
      height: 8,
      borderRadius: 'sm'
    }
  }
};

const defaultProps = InputStyle.defaultProps;

const pinInput = {
  register,
  defaultProps,
  baseStyle,
  variants,
  sizes
};

export default pinInput;
