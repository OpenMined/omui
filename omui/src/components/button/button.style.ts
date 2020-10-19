import { mode, transparentize } from '@chakra-ui/theme-tools';
import { fonts } from '../../theme/foundations/typography';

type Dict = Record<string, any>;

function variantGhost(props: Dict) {
  const { colorScheme: c, theme } = props;

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: { bg: mode(`gray.100`, `whiteAlpha.200`)(props) },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: 'transparent',
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props)
    }
  };
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: '1px solid',
    borderColor: c === 'gray' ? borderColor : 'currentColor',
    ...variantGhost(props)
  };
}

const Button = {
  baseStyle: {
    fontWeight: 'medium',
    fontFamily: fonts.heading,
    _focus: { boxShadow: 'none' }
  },
  defaultProps: {
    colorScheme: 'blue'
  },
  variants: {
    outline: variantOutline
  }
};

export default Button;
