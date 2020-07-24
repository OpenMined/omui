import theme from '@chakra-ui/theme';

import { BaseStyle, runIfFn } from '@chakra-ui/theme-tools';
import { CheckboxStyle } from '../checkbox';

const { Radio } = theme.components;

const baseStyle: BaseStyle<typeof Radio.register> = (props) => {
  const { label, control } = runIfFn(CheckboxStyle.baseStyle, props);
  return {
    label,
    control: {
      ...control,
      borderRadius: 'full',
      _checked: {
        ...control?.['_checked'],
        _before: {
          content: `""`,
          display: 'inline-block',
          position: 'relative',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          bg: 'current'
        }
      }
    }
  };
};

Radio.baseStyle = baseStyle;

export default Radio;
