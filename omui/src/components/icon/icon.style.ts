import { ComponentTheme } from '@chakra-ui/theme-tools';

const Icon: ComponentTheme = {
  defaultProps: {
    size: 'md'
  },
  sizes: {
    xs: { boxSize: '16px' },
    sm: { boxSize: '24px' },
    md: { boxSize: '32px' },
    lg: { boxSize: '40px' },
    xl: { boxSize: '48px' }
  }
};

export const IconSize = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl'
};

export default Icon;
