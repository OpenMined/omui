import theme from '@chakra-ui/theme';

const { Slider } = theme.components;

import { BaseStyle, mode, orient } from '@chakra-ui/theme-tools';

const baseStyle: BaseStyle<typeof Slider.register> = (props) => {
  return {
    container: {
      _disabled: {
        opacity: 0.6,
        cursor: 'default',
        pointerEvents: 'none'
      },
      ...orient({
        orientation: props.orientation,
        vertical: { height: '100%' },
        horizontal: { width: '100%' }
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
      boxShadow: 'sm',
      border: '1px solid',
      borderColor: 'transparent',
      transition: 'transform 0.2s',
      _focus: {
        boxShadow: 'outline'
      },
      _disabled: {
        bg: 'gray.300'
      },
      ...orient({
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
      })
    },
    filledTrack: {
      bg: mode(`${props.colorScheme}.500`, `${props.colorScheme}.200`)(props)
    }
  };
};

Slider.baseStyle = baseStyle;

export default Slider;
