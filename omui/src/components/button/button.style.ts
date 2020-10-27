import { mode, transparentize } from '@chakra-ui/theme-tools';
import { fonts } from '../../theme/foundations/typography';
import { themeDefaultColorMap } from '../../theme/helpers';

type Dict = Record<string, any>;

function variantGhost(props: Dict) {
  const { colorScheme: c, theme } = props;

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props)
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  return {
    color: mode(`${c}.${themeDefaultColorMap[c]}`, `${c}.200`)(props),
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
  const { colorScheme: c, theme } = props;
  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      border: '2.5px solid',
      borderColor: 'gray.200',
      _hover: {
        bg: mode(`gray.800`, `whiteAlpha.200`)(props),
        borderColor: 'gray.800',
        color: 'gray.50'
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }

  return {
    ...variantGhost(props),
    border: '2.5px solid',
    borderColor: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      bg: mode(`${c}.500`, darkHoverBg)(props),
      color: mode(`white`, `gray.900`)(props)
    }
  };
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: 'auto',
    lineHeight: 'normal',
    color: mode(`${c}.${themeDefaultColorMap[c]}`, `${c}.200`)(props),
    _hover: { textDecoration: 'underline' },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props)
    }
  };
}

function variantDark(props: Dict) {
  const { colorScheme: c } = props;

  const textColor = c == 'gray' ? `${c}.50` : `${c}.100`;

  return {
    bg: mode('gray.800', `${c}.200`)(props),
    color: textColor,
    _hover: { color: `${c}.300` }
  };
}

function variantLight(props: Dict) {
  const { colorScheme: c } = props;

  const backgroundColor = c == 'gray' ? `${c}.200` : `${c}.50`;

  return {
    bg: backgroundColor,
    color: `${c}.${themeDefaultColorMap[c]}`,
    _hover: {
      bg: `${c}.${themeDefaultColorMap[c]}`,
      color: 'gray.50'
    }
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
    outline: variantOutline,
    link: variantLink,
    dark: variantDark,
    light: variantLight
  }
};

export default Button;
