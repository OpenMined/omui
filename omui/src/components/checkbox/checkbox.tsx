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

export const IndeterminateCheckboxGroup = ({
  checkboxes,
  ...props
}: IndeterminateCheckboxGroupProps) => {
  const composeStructure = (checkboxes: CheckboxGroupItemProps) => {
    const { children, label, value, checked, ...checkboxProps } = checkboxes;

    const allChildrenChecked = children
      ? children.every((i) => i.checked)
      : false;
    const someChildrenChecked = children
      ? children.some((i) => i.checked)
      : false;

    return (
      <Box key={value} px={6}>
        <Checkbox
          {...checkboxProps}
          isChecked={checked || allChildrenChecked}
          isIndeterminate={someChildrenChecked && !allChildrenChecked}
          value={value}
        >
          {label}
        </Checkbox>
        {children &&
          children.map((child: CheckboxGroupItemProps) =>
            composeStructure(child)
          )}
      </Box>
    );
  };

  // @ts-ignore
  return <Box {...props}>{composeStructure(checkboxes)}</Box>;
};

// function IndeterminateExample() {
//   const [checkedItems, setCheckedItems] = React.useState([false, false]);

//   const allChecked = checkedItems.every(Boolean);
//   const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

//   return (
//     <>
//       <Checkbox
//         isChecked={allChecked}
//         isIndeterminate={isIndeterminate}
//         onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
//         children="Parent Checkbox"
//       />
//       <Stack pl={6} mt={1} spacing={1}>
//         <Checkbox
//           isChecked={checkedItems[0]}
//           onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
//           children="Child Checkbox 1"
//         />
//         <Checkbox
//           isChecked={checkedItems[1]}
//           onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
//           children="Child Checkbox 2"
//         />
//       </Stack>
//     </>
//   );
// }
