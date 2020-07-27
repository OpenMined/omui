import theme from '@chakra-ui/theme';

const { Checkbox } = theme.components;

const baseStyle = (props: object) => {

  let CheckboxBaseStyle = Checkbox.baseStyle!(props);

  return {
    ...CheckboxBaseStyle,
    control: {
      ...CheckboxBaseStyle.control,
      _focus: { boxShadow: 'none' }
    }
  }
}

Checkbox.baseStyle = baseStyle;

export default Checkbox;
