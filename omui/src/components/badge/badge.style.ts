import theme from '@chakra-ui/theme';

const { Badge } = theme.components;

Badge.baseStyle.container = {
  ...Badge.baseStyle.container,
  fontWeight: 'medium'
};

Badge.defaultProps = {
  ...Badge.defaultProps,
  colorScheme: 'blue'
};

export default Badge;
