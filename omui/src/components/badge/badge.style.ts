import { mode, transparentize } from '@chakra-ui/theme-tools';

function variantLight(props: Record<string, any>) {
  const { colorScheme: c, theme } = props;
  const darkBg = transparentize(`${c}.200`, 0.16)(theme);
  return {
    bg: mode(`${c}.100`, darkBg)(props),
    color: mode(`${c}.800`, `${c}.200`)(props)
  };
}

const Badge = {
  baseStyle: {
    fontWeight: 'medium'
  },
  defaultProps: {
    colorScheme: 'blue'
  },
  variants: {
    light: variantLight
  }
};

export default Badge;
