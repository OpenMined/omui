import theme from '@chakra-ui/theme';

const { Stat } = theme.components;

Stat.baseStyle.number = {
  ...Stat.baseStyle.number,
  fontWeight: 'medium'
};

export default Stat;
