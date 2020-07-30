import theme from '@chakra-ui/theme';

const { Tag } = theme.components;

Tag.baseStyle!.closeButton = {
  ...Tag.baseStyle!.closeButton,
  _focus: { 
    bg: 'rgba(0, 0, 0, 0.14)',
    boxShadow: 'none' 
  }
};

export default Tag;
