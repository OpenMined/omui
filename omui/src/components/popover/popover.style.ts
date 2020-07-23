import { mode } from '@chakra-ui/theme-tools';

// TODO: remove the 'any' type
const Popover: any = {
  baseStyle: (props: any) => ({
    Content: {
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
    Header: {
      paddingX: 4,
      paddingY: 3,
      borderBottomWidth: '1px',
      fontWeight: 'medium',
      lineHeight: 'normal'
    },
    Body: {
      paddingX: 4,
      paddingY: 3
    },
    Footer: {
      paddingX: 4,
      paddingY: 3,
      borderTopWidth: '1px'
    }
  })
};

export default Popover;
