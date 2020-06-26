import { mode, getColor, ink, transparentize } from '@chakra-ui/theme-tools';

const getSolidStyle = (props) => {
  const { colorScheme: c, theme: t } = props;
  const dark = transparentize(`${c}.500`, 0.6)(t);

  return {
    bg: mode(`${c}.500`, dark)(props),
    color: mode(`white`, `whiteAlpha.800`)(props)
  };
};

const getSubtleStyle = (props) => {
  const { colorScheme: c, theme: t } = props;
  const darkBg = ink(`${c}.200`, 'lowest')(t);

  return {
    bg: mode(`${c}.100`, darkBg)(props),
    color: mode(`${c}.800`, `${c}.200`)(props)
  };
};

const getOutlineStyle = (props) => {
  const { colorScheme: c, theme: t } = props;
  const dark = transparentize(`${c}.200`, 0.8)(t);
  const light = getColor(t, `${c}.500`);
  const color = mode(light, dark)(props);

  return {
    color,
    boxShadow: `inset 0 0 0px 1px ` + color
  };
};

export const BadgeVariants = {
  solid: 'solid',
  subtle: 'subtle',
  outline: 'outline'
};

export default {
  baseStyle: {
    paddingX: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'medium'
  },
  variants: {
    solid: getSolidStyle,
    outline: getOutlineStyle,
    subtle: getSubtleStyle
  }
};
