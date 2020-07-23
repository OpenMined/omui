import { mode, orient } from '@chakra-ui/theme-tools';

// TODO: remove the 'any' type
const Slider: any = {
  defaultProps: {
    size: 'md',
    colorScheme: 'blue'
  },
  // TODO: remove all the 'any' types
  sizes: {
    lg: (props: any) => ({
      Thumb: {
        width: '16px',
        height: '16px'
      },
      Track: orient({
        orientation: props.orientation,
        horizontal: {
          height: '4px'
        },
        vertical: {
          width: '4px'
        }
      })
    }),
    md: (props: any) => ({
      Thumb: {
        width: '14px',
        height: '14px'
      },
      Track: orient({
        orientation: props.orientation,
        horizontal: { height: '4px' },
        vertical: { width: '4px' }
      })
    }),
    sm: (props: any) => ({
      Thumb: {
        width: '10px',
        height: '10px'
      },
      Track: orient({
        orientation: props.orientation,
        horizontal: { height: '2px' },
        vertical: { width: '2px' }
      })
    })
  },
  baseStyle: (props: any) => ({
    Root: {
      _disabled: {
        opacity: 0.6,
        cursor: 'default',
        pointerEvents: 'none'
      },
      ...orient({
        orientation: props.orientation,
        vertical: {
          height: '100%'
        },
        horizontal: {
          width: '100%'
        }
      })
    },
    Track: {
      borderRadius: 'sm',
      bg: mode('gray.200', 'whiteAlpha.200')(props),
      _disabled: {
        bg: mode('gray.300', 'whiteAlpha.300')(props)
      }
    },
    Thumb: {
      zIndex: 1,
      borderRadius: 'full',
      bg: 'white',
      boxShadow: 'sm',
      border: '1px solid',
      borderColor: 'transparent',
      transition: 'transform 0.2s',
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
    FilledTrack: {
      bg: mode(`${props.colorScheme}.500`, `${props.colorScheme}.200`)(props)
    }
  })
};

export const SliderSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export default Slider;
