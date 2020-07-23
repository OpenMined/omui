import { mode, Props } from '@chakra-ui/theme-tools';

import { default as InputStyle, InputTheme } from './input.style';

// TODO: remove the 'object' type
function outline(props: Props): object {
  return {
    border: '1px solid',
    borderColor: mode('inherit', 'whiteAlpha.50')(props),
    bg: mode('gray.100', 'whiteAlpha.300')(props)
  };
}

// TODO: remove the 'object' type
function filled(props: Props): object {
  return {
    border: '2px solid',
    borderColor: 'transparent',
    bg: mode('gray.100', 'whiteAlpha.50')(props)
  };
}

// TODO: remove the 'object' type
const flushed: object = {
  borderBottom: '2px solid',
  borderColor: 'inherit',
  borderRadius: 0,
  paddingX: 0,
  bg: 'transparent'
};

const unstyled = {
  bg: 'transparent',
  paddingX: 0,
  height: 'auto'
};

const sizes: InputTheme['sizes'] = InputStyle.sizes;

const InputAddon: InputTheme = {
  sizes,
  variants: {
    outline,
    filled,
    flushed,
    unstyled
  }
};

export const InputAddonVariants = {
  outline: 'outline',
  filled: 'filled',
  flushed: 'flushed',
  unstyled: 'unstyled'
};

export default InputAddon;
