import theme from '@chakra-ui/theme';

const { Slider } = theme.components;

const baseStyle = (props: object) => {

  let SliderBaseStyle = Slider.baseStyle!(props);

  return {
    ...SliderBaseStyle,
    thumb: {
      ...SliderBaseStyle.thumb,  
      _focus: { boxShadow: 'none' }
    }
  }
}

Slider.baseStyle = baseStyle;

export default Slider;
