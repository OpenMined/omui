import theme from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

const { Popover } = theme.components;

const baseStyle = function (props: any) {
  return {
    content: {
      bg: mode('white', 'gray.700')(props),
      border: '1px solid',
      borderColor: 'inherit',
      borderRadius: 'md',
      boxShadow: 'sm',
      w: '100%',
      maxW: 'xs',
      zIndex: '1',
      _focus: {
        outline: 0,
        boxShadow: 'none'
      }
    },
    header: {
      px: 3,
      py: 2,
      borderBottomWidth: '1px'
    },
    body: {
      px: 3,
      py: 2
    },
    footer: {
      px: 3,
      py: 2,
      borderTopWidth: '1px'
    }
  };
};

Popover.baseStyle = baseStyle;

export default Popover;
