import { mode } from '@chakra-ui/theme-tools';
import { fonts, fontWeights } from '../../theme/foundations/typography';

type Dict = Record<string, any>;

function baseStyleOverlay(props: Dict) {
  const { isCentered, scrollBehavior } = props;

  return {
    bg: 'blackAlpha.600',
    display: 'flex',
    zIndex: 'overlay',
    justifyContent: 'center',
    alignItems: isCentered ? 'center' : 'flex-start',
    overflow: scrollBehavior === 'inside' ? 'hidden' : 'auto'
  };
}

function baseStyleContent(props: Dict) {
  const { scrollBehavior } = props;

  return {
    borderRadius: 'md',
    bg: mode('white', 'gray.700')(props),
    color: 'inherit',
    my: '3.75rem',
    zIndex: 'modal',
    maxH: scrollBehavior === 'inside' ? 'calc(100vh - 7.5rem)' : undefined,
    boxShadow: mode('lg', 'dark-lg')(props)
  };
}

const baseStyleHeader = {
  px: 6,
  py: 4,
  fontSize: 'xl',
  fontFamily: fonts.heading,
  fontWeight: fontWeights.medium
};

function baseStyleBody(props: Dict) {
  const { scrollBehavior } = props;
  return {
    px: 6,
    py: 2,
    flex: 1,
    overflow: scrollBehavior === 'inside' ? 'auto' : undefined
  };
}

const baseStyleFooter = {
  px: 6,
  py: 4
};

const baseStyle = (props: Dict) => ({
  overlay: baseStyleOverlay(props),
  content: baseStyleContent(props),
  header: baseStyleHeader,
  body: baseStyleBody(props),
  footer: baseStyleFooter
});

const Modal = {
  baseStyle
};

export default Modal;
