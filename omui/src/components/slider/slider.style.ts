import { mode, orient } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

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

// Sizes

function sizeXl(props: Dict) {
  return {
    thumb: { w: '18px', h: '18px' },
    track: orient({
      orientation: props.orientation,
      horizontal: { h: '16px' },
      vertical: { w: '16px' }
    })
  };
}

function sizeLg(props: Dict) {
  return {
    thumb: { w: '14px', h: '14px' },
    track: orient({
      orientation: props.orientation,
      horizontal: { h: '12px' },
      vertical: { w: '12px' }
    })
  };
}

function sizeMd(props: Dict) {
  return {
    thumb: { w: '12px', h: '12px' },
    track: orient({
      orientation: props.orientation,
      horizontal: { h: '8px' },
      vertical: { w: '8px' }
    })
  };
}

function sizeSm(props: Dict) {
  return {
    thumb: { w: '10px', h: '10px' },
    track: orient({
      orientation: props.orientation,
      horizontal: { h: '6px' },
      vertical: { w: '6px' }
    })
  };
}

function sizeXs(props: Dict) {
  return {
    thumb: { w: '8px', h: '8px' },
    track: orient({
      orientation: props.orientation,
      horizontal: { h: '4px' },
      vertical: { w: '4px' }
    })
  };
}

const sizes = {
  xl: sizeXl,
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm,
  xs: sizeXs
};

const Slider = {
  sizes,
  baseStyle
};

export default Slider;
