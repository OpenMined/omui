import theme from '../foundations';
import { randomColor, isDark, mode } from '@chakra-ui/theme-tools';

function getSize(size) {
  const themeSize = theme.sizes[size];
  const styles = {
    width: size,
    height: size,
    fontSize: `calc(${themeSize || size} / 2.5)`
  };

  if (size !== '100%') {
    styles.lineHeight = themeSize || size;
  }

  return {
    Root: styles,
    ExcessLabel: styles
  };
}

function getRootStyle(props) {
  const { name, theme: t } = props;
  const bg = name
    ? randomColor({
        string: name
      })
    : 'gray.400';
  const isBgDark = isDark(bg)(t);
  const color = name ? (isBgDark ? 'white' : 'gray.800') : 'white';
  const borderColor = mode('white', 'gray.800')(props);

  return {
    bg,
    color,
    borderColor
  };
}

const Avatar = {
  defaultProps: {
    size: 'md'
  },
  baseStyle: (props) => ({
    Root: {
      verticalAlign: 'top',
      ...getRootStyle(props)
    },
    Badge: {
      transform: 'translate(25%, 25%)',
      borderRadius: 'full',
      border: '0.2em solid',
      borderColor: mode('white', 'gray.800')(props),
      boxSize: '1em'
    },
    ExcessLabel: {
      bg: mode('gray.200', 'whiteAlpha.400')(props),
      fontWeight: 'normal'
    }
  }),
  sizes: {
    '2xs': getSize('4'),
    xs: getSize('6'),
    sm: getSize('8'),
    md: getSize('12'),
    lg: getSize('16'),
    xl: getSize('24'),
    '2xl': getSize('32'),
    full: getSize('100%')
  }
};

export const AvatarSizes = {
  '2xs': '2xs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  full: 'full'
};

export default Avatar;
