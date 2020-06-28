import React from 'react';
import {
  Checkbox as ChakraCheckbox,
  CheckboxGroup as ChakraCheckboxGroup,
  CheckboxGroupProps as ICheckboxGroupProps
} from '@chakra-ui/core';

import { Stack } from '../Stack';
import { Box } from '../box/box';

export const Checkbox = ChakraCheckbox;

Checkbox.defaultProps = {
  colorScheme: 'blue'
};

type CheckboxGroupItemProps = {
  value: string | number;
  label: string;
  checked?: boolean;
  children?: CheckboxGroupItemProps[];
};

type CheckboxGroupProps = ICheckboxGroupProps & {
  direction?: 'horizontal' | 'vertical';
  checkboxes: CheckboxGroupItemProps[];
};

export const CheckboxGroup = ({
  direction,
  checkboxes,
  ...props
}: CheckboxGroupProps) => {
  const defaultValue = checkboxes
    .map((i) => {
      if (i.checked) return i.value;
      return null;
    })
    .filter((i) => i !== null);

  return (
    // @ts-ignore
    <ChakraCheckboxGroup {...props} defaultValue={defaultValue}>
      <Stack
        spacing={direction === 'horizontal' ? 6 : 2}
        direction={direction === 'horizontal' ? 'row' : 'column'}
      >
        {checkboxes.map(({ label, value, ...check }) => (
          <Checkbox value={value} key={value} {...check}>
            {label}
          </Checkbox>
        ))}
      </Stack>
    </ChakraCheckboxGroup>
  );
};

CheckboxGroup.defaultProps = {
  direction: 'vertical'
};

type IndeterminateCheckboxGroupProps = {
  checkboxes: CheckboxGroupItemProps[];
};

// TODO: This component is not ready yet... we have some fairly complicated (recursive) state management logic to handle here
// export const IndeterminateCheckboxGroup = ({
//   checkboxes,
//   ...props
// }: IndeterminateCheckboxGroupProps) => {
//   const determineChecks = (
//     children: CheckboxGroupItemProps[] | undefined,
//     checked: boolean | undefined
//   ) => {
//     const allChildrenChecked = children
//       ? children.every((i) => i.checked)
//       : false;
//     const someChildrenChecked = children
//       ? children.some((i) => i.checked)
//       : false;

//     const isChecked = checked || allChildrenChecked;
//     const isIndeterminate = someChildrenChecked && !allChildrenChecked;

//     return { isChecked, isIndeterminate };
//   };

//   const composeStructure = (checkboxes: CheckboxGroupItemProps) => {
//     const { children, label, checked, ...checkboxProps } = checkboxes;
//     const { isChecked, isIndeterminate } = determineChecks(children, checked);

//     if (children) {
//       return (
//         <Stack spacing={2} direction="column" key={label}>
//           <Checkbox
//             {...checkboxProps}
//             defaultIsChecked={isChecked}
//             isIndeterminate={isIndeterminate}
//           >
//             {label}
//           </Checkbox>
//           <Stack spacing={2} direction="column" pl={4}>
//             {children.map((child) => composeStructure(child))}
//           </Stack>
//         </Stack>
//       );
//     }

//     return (
//       <Checkbox
//         {...checkboxProps}
//         defaultIsChecked={isChecked}
//         isIndeterminate={isIndeterminate}
//         key={label}
//       >
//         {label}
//       </Checkbox>
//     );
//   };

//   // @ts-ignore
//   return <Box {...props}>{composeStructure(checkboxes)}</Box>;
// };
