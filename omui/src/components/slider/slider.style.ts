import theme from '@chakra-ui/theme';
import { mode, orient } from '@chakra-ui/theme-tools';

const { Slider } = theme.components;

function thumbOrientation(props: Record<string, any>) {
  return orient({
    orientation: props.orientation,
    vertical: {
      left: '50%',
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`
      }
    },
    horizontal: {
      top: '50%',
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`
      }
    }
  });
}

const baseStyle = function (props: any) {
  const { orientation, colorScheme: c } = props;

  return {
    container: {
      _disabled: {
        opacity: 0.6,
        cursor: 'default',
        pointerEvents: 'none'
      },
      ...orient({
        orientation,
        vertical: { h: '100%' },
        horizontal: { w: '100%' }
      })
    },
    track: {
      borderRadius: 'sm',
      bg: mode('gray.200', 'whiteAlpha.200')(props),
      _disabled: {
        bg: mode('gray.300', 'whiteAlpha.300')(props)
      }
    },
    thumb: {
      zIndex: 1,
      borderRadius: 'full',
      bg: 'white',
      boxShadow: 'base',
      border: '1px solid',
      borderColor: 'transparent',
      transition: 'transform 0.2s',
      _focus: { boxShadow: 'none' },
      _disabled: { bg: 'gray.300' },
      ...thumbOrientation(props)
    },
    filledTrack: {
      bg: mode(`${c}.500`, `${c}.200`)(props)
    }
  };
};

Slider.baseStyle = baseStyle;

export default Slider;
