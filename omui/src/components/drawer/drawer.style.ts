import { mode } from '@chakra-ui/theme-tools';
import { fonts, fontWeights } from '../../theme/foundations/typography';

const baseStyleOverlay = {
  bg: 'blackAlpha.600',
  zIndex: 'overlay'
};

function baseStyleContent(props: Record<string, any>) {
  const { isFullHeight } = props;

  return {
    ...(isFullHeight && { height: '100vh' }),
    zIndex: 'modal',
    bg: mode('white', 'gray.700')(props),
    color: 'inherit',
    boxShadow: mode('lg', 'dark-lg')(props)
  };
}

const baseStyleHeader = {
  px: 6,
  py: 4,
  fontSize: 'xl',
  fontWeight: fontWeights.medium,
  fontFamily: fonts.heading
};

const baseStyleBody = {
  px: 6,
  py: 2,
  flex: 1,
  overflow: 'auto'
};

const baseStyleFooter = {
  px: 6,
  py: 4
};

const baseStyle = (props: Record<string, any>) => ({
  overlay: baseStyleOverlay,
  content: baseStyleContent(props),
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter
});

const Drawer = {
  baseStyle
};

export default Drawer;
