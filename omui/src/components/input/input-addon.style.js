import { mode } from '@chakra-ui/theme-tools';
import { InputVariants } from './input.style';

const getOutlineStyle = (props) => ({
  border: '1px solid',
  borderColor: mode('inherit', 'whiteAlpha.50')(props),
  bg: mode('gray.100', 'whiteAlpha.300')(props)
});

const getFilledStyle = (props) => ({
  border: '2px solid',
  borderColor: 'transparent',
  bg: mode('gray.100', 'whiteAlpha.50')(props)
});

const getFlushedStyle = (props) => ({
  borderBottom: '2px solid',
  borderColor: 'inherit',
  borderRadius: 0,
  paddingX: 0,
  bg: 'transparent'
});

const unstyled = {
  bg: 'transparent',
  paddingX: 0,
  height: 'auto'
};

const sizes = {
  lg: {
    fontSize: 'lg',
    paddingX: 4,
    paddingY: 2,
    borderRadius: 'md'
  },
  md: {
    fontSize: 'md',
    paddingX: 4,
    paddingY: 2,
    borderRadius: 'md'
  },
  sm: {
    fontSize: 'sm',
    paddingX: 3,
    paddingY: 1,
    borderRadius: 'sm'
  }
};

export const InputAddonVariants = InputVariants;

export default {
  sizes,
  variants: {
    outline: getOutlineStyle,
    filled: getFilledStyle,
    flushed: getFlushedStyle,
    unstyled
  }
};
