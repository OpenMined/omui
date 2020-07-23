import { mode } from '@chakra-ui/theme-tools';

// TODO: remove the 'any' type
const Kbd: any = {
  // TODO: remove the 'any' type
  baseStyle: (props: any) => ({
    bg: mode('gray.100', 'whiteAlpha')(props),
    borderRadius: 'md',
    borderWidth: '1px',
    borderBottomWidth: '3px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    lineHeight: 'normal',
    px: '0.4em',
    whiteSpace: 'nowrap'
  })
};

export default Kbd;
