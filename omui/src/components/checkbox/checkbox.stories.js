import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { Checkbox, CheckboxGroup } from './';
import { Checkbox as CheckboxStyle } from '../../theme';
import { colors } from '../../theme/foundations/colors';

export default { title: 'Components/Checkbox', decorators: [withKnobs] };

const { colorScheme } = CheckboxStyle.defaultProps;
const { direction } = CheckboxGroup.defaultProps;
const themeCheckboxColors = Object.keys(colors);

export const Default = () => (
  <Checkbox
    defaultIsChecked
    isInvalid={boolean('Is invalid?', false)}
    isDisabled={boolean('Is disabled?', false)}
    colorScheme={select('Color', themeCheckboxColors, colorScheme)}
    value={text('Value', 'the-value')}
  >
    {text('Label', 'My checkbox label')}
  </Checkbox>
);

export const Group = () => {
  const checkboxes = [
    {
      label: 'First option',
      value: 'first-option'
    },
    {
      label: 'Second option',
      value: 'second-option',
      checked: true
    },
    {
      label: 'Third option',
      value: 'third-option',
      checked: true
    }
  ];

  return (
    <CheckboxGroup
      direction={select('Direction', ['horizontal', 'vertical'], direction)}
      checkboxes={checkboxes}
    />
  );
};

// export const Indeterminate = () => {
//   const checkboxes = {
//     label: '1.0.0',
//     value: '1-0-0',
//     children: [
//       {
//         label: '1.1.0',
//         value: '1-1-0',
//         children: [
//           {
//             label: '1.1.1',
//             value: '1-1-1',
//             checked: true
//           }
//         ]
//       },
//       {
//         label: '1.2.0',
//         value: '1-2-0',
//         children: [
//           {
//             label: '1.2.1',
//             value: '1-2-1',
//             checked: true
//           },
//           {
//             label: '1.2.2',
//             value: '1-2-2'
//           },
//           {
//             label: '1.2.3',
//             value: '1-2-3',
//             checked: true
//           }
//         ]
//       }
//     ]
//   };

//   return <IndeterminateCheckboxGroup checkboxes={checkboxes} />;
// };
