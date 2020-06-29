import { ComponentTheme } from '@chakra-ui/theme-tools';

import Input, {
  InputVariants,
  InputSizes,
  InputProps
} from '../../components/input/input.style';

const Select: ComponentTheme<InputProps> = {
  ...Input,
  baseStyle: {
    ...Input.baseStyle,
    appearance: 'none',
    paddingRight: '2rem',
    paddingBottom: '1px',
    lineHeight: 'normal'
  }
};

export const SelectSizes = InputSizes;
export const SelectVariants = InputVariants;

export default Select;
