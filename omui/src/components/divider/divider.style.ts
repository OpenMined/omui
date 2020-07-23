// import { ComponentTheme } from '@chakra-ui/theme-tools';

// TODO: remove the 'any' type
const Divider: any = {
  defaultProps: {
    variant: 'horizontal'
  },
  variants: {
    vertical: {
      borderLeftWidth: '1px',
      height: '100%'
    },
    horizontal: {
      borderBottomWidth: '1px',
      width: '100%'
    }
  }
};

export default Divider;
