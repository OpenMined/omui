// import { ComponentTheme } from '@chakra-ui/theme-tools';

import { default as InputStyle } from '../input/input.style';

// TODO: remove the 'any' type
const Select: any = {
  ...InputStyle,
  baseStyle: {
    ...InputStyle.baseStyle,
    appearance: 'none',
    paddingRight: '2rem',
    paddingBottom: '1px',
    lineHeight: 'normal'
  }
};

export const SelectSizes = InputStyle.sizes;
export const SelectVariants = InputStyle.variants;

export default Select;
