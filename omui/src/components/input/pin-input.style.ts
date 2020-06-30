import { ComponentTheme } from '@chakra-ui/theme-tools';

import { InputStyle, InputProps, InputVariants } from './';

const PinInput: ComponentTheme<InputProps> = {
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
