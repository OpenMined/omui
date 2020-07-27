import theme from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

const { Modal } = theme.components;

const baseStyle = (props: object) => {
  let ModalBaseStyle = () => Modal.baseStyle!(props);

  return {
    ...ModalBaseStyle
  };
};
// @ts-ignore
Modal.baseStyle = baseStyle;

export default Modal;
