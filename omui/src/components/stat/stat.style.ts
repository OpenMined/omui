import theme from '@chakra-ui/theme';

const { Stat } = theme.components;

Stat.baseStyle!.label = {
  ...Stat.baseStyle!.label,
  fontWeight: 'medium'
};

export default Stat;
