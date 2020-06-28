import Input, { InputSizes, InputVariants } from '../input/input.style';

export const TextareaVariants = InputVariants;
export const TextareaSizes = InputSizes;

export default {
  ...Input,
  baseStyle: {
    ...Input.baseStyle,
    paddingX: 4,
    paddingY: 3,
    fontSize: 'md',
    borderRadius: 'md',
    minHeight: '80px'
  }
};
