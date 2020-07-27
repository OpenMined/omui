import theme from '@chakra-ui/theme';

const { CloseButton } = theme.components;

const baseStyle = (props: object) => {

  let CloseButtonBaseStyle = () => CloseButton.baseStyle!(props);

  return {
    ...CloseButtonBaseStyle,
    _focus: { boxShadow: 'none' }
  }
}

// @ts-ignore
CloseButton.baseStyle = baseStyle;

export default CloseButton;
