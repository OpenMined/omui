import { mode } from '@chakra-ui/theme-tools';

// TODO: remove the 'any' type
const Tooltip: any = {
  baseStyle: (props: any) => ({
    paddingX: '8px',
    paddingY: '2px',
    bg: mode(`gray.700`, `gray.300`)(props),
    color: mode(`whiteAlpha.900`, `gray.900`)(props),
    borderRadius: 'sm',
    fontWeight: 'medium',
    pointerEvents: 'none',
    fontSize: 'sm',
    boxShadow: 'md',
    maxWidth: '320px'
  })
};

export default Tooltip;
