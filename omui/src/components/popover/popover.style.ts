import theme from '@chakra-ui/theme';

const { Popover } = theme.components;

const baseStyle = (props: object) => {

  let PopoverBaseStyle = Popover.baseStyle!(props);

  return {
    ...PopoverBaseStyle,
    content: {
      ...PopoverBaseStyle.content,
      _focus: {
        outline: 0,
        boxShadow: 'none'
      }
    }
  }
}

Popover.baseStyle = baseStyle;

export default Popover;
