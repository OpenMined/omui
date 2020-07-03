import { keyframes } from '@chakra-ui/system';
import { ComponentTheme, mode, Props, getColor } from '@chakra-ui/theme-tools';

export interface LoaderProps {
  startColor?: string;
  endColor?: string;
  speed?: number;
  duration?: number;
}

export const frame = (start: string, end: string) => keyframes`
  from {
    border-color: ${start};
    background: ${start};
  }
  to {
    border-color: ${end};
    background: ${end};
  }
`;

type CustomProps = Props & LoaderProps;

function getBaseStyle(props: CustomProps) {
  const {
    startColor = mode('gray.100', 'gray.800')(props),
    endColor = mode('gray.400', 'gray.600')(props),
    speed,
    theme
  } = props;

  const start = getColor(theme, startColor);
  const end = getColor(theme, endColor);

  return {
    borderColor: start,
    background: end,
    animation: `${speed}s linear infinite alternate ${frame(start, end)}`
  };
}

const Loader: ComponentTheme<LoaderProps> = {
  baseStyle: getBaseStyle
};

export default Loader;