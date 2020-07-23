// import { ComponentTheme } from '@chakra-ui/theme-tools';

import {
  default as InputStyle,
  InputProps,
  InputVariants
} from './input.style';

// TODO: remove the 'any' type
const PinInput: any = {
  defaultProps: InputStyle.defaultProps,
  baseStyle: InputStyle.baseStyle,
  variants: InputStyle.variants,
  sizes: {
    lg: {
      fontSize: 'lg',
      width: 12,
      height: 12,
      borderRadius: 'md'
    },
    md: {
      fontSize: 'md',
      width: 10,
      height: 10,
      borderRadius: 'md'
    },
    sm: {
      fontSize: 'sm',
      width: 8,
      height: 8,
      borderRadius: 'sm'
    }
  }
};

export const PinInputSizes = {
  lg: 'lg',
  md: 'md',
  sm: 'sm'
};

export const PinInputVariants = InputVariants;

export default PinInput;
