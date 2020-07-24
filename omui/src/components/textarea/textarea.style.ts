import { default as InputStyle } from '../input/input.style';

const Textarea = {
  ...InputStyle,
  baseStyle: {
    ...InputStyle.baseStyle,
    paddingY: '8px',
    minHeight: '80px',
    lineHeight: 'short'
  }
};

export const TextareaVariants = InputStyle.variants;
export const TextareaSizes = InputStyle.sizes;

export default Textarea;
