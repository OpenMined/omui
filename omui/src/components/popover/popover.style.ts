import theme from '@chakra-ui/theme';
import { BaseStyle, mode } from '@chakra-ui/theme-tools';

const { Popover } = theme.components;

const baseStyle: BaseStyle<typeof Popover.register> = (props) => {
  return {
    content: {
      bg: mode('white', 'gray.700')(props),
      border: '1px solid',
      borderColor: 'inherit',
      borderRadius: 'md',
      boxShadow: 'sm',
      width: '100%',
      maxWidth: 'xs',
      zIndex: '1',
      _focus: {
        outline: 0
      }
    },
    header: {
      paddingX: 4,
      paddingY: 3,
      borderBottomWidth: '1px',
      fontWeight: 'medium',
      lineHeight: 'normal'
    },
    body: {
      paddingX: 4,
      paddingY: 3
    },
    footer: {
      paddingX: 4,
      paddingY: 3,
      borderTopWidth: '1px'
    }
  };
};

Popover.baseStyle = baseStyle;

export default Popover;
