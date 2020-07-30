import theme from '@chakra-ui/theme';

const { Badge } = theme.components;

Badge.baseStyle! = {
  ...Badge.baseStyle!,
  fontWeight: 'medium'
};

Badge.defaultProps = {
  ...Badge.defaultProps,
  colorScheme: 'blue'
};

export default Badge;
