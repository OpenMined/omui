import { getColor, mode, transparentize } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

function getBg(props: Dict) {
  const { theme, colorScheme: c } = props;
  const lightBg = getColor(theme, `${c}.100`, c);
  const darkBg = transparentize(`${c}.200`, 0.16)(theme);
  return mode(lightBg, darkBg)(props);
}

function variantBottomAccent(props: Dict) {
  const { colorScheme: c } = props;
  return {
    container: {
      pl: 3,
      borderBottom: '4px solid',
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(`${c}.500`, `${c}.200`)(props)
    }
  };
}

function variantSolid(props: Dict) {
  const { colorScheme: c } = props;
  return {
    container: {
      bg: mode(`${c}.400`, `${c}.200`)(props),
      color: mode(`white`, `gray.900`)(props)
    }
  };
}

const Alert = {
  variants: {
    'bottom-accent': variantBottomAccent,
    solid: variantSolid
  }
};

export default Alert;
