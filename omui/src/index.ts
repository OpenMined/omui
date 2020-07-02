/*
  Pre-Framer todo's:
  - Finish all components
  - Consider adding any new components added by v1
  - Consider getting rid of Stack and other redundant helper components
  - Figure out whether or not to use items as DOM children or as array config and apply mentality across all components
  - Check all components for responsiveness
  - Get all helpers to reference the new component themes or consider getting rid of helpers if possible
  - Figure out why accordions are so damn slow
  - Migrate components over to Framer

  Post-Framer todo's:
  - Go through and re-evaluate all Typescript types
  - Look into various TODO's
  - Create a form component, similar to SR wizard (Patrick), and consider regrouping form components in Storybook
  - Consider supporting another color mode
  - Provide ample stories for each component
  - Create MDX documentation for each component in Storybook: https://medium.com/storybookjs/rich-docs-with-storybook-mdx-61bc145ae7bc
  - Cypress testing: https://itnext.io/cypress-storybook-keeping-test-scenario-data-and-component-rendering-in-one-place-c57b23cc1640
*/

export { Accordion, AccordionItem } from './components/accordion';
export { Alert } from './components/alert';
export { AlertBox } from './components/alert-box';
export { Avatar, AvatarGroup } from './components/avatar';
export { Badge } from './components/badge';
export { Box } from './components/box';
export { Breadcrumb } from './components/breadcrumb';
export { Button, IconButton } from './components/button';
export { Checkbox, CheckboxGroup } from './components/checkbox';
export { Code, CodeEditor } from './components/code';
export { Collapse } from './components/collapse';
export { Divider } from './components/divider';
export { Drawer } from './components/drawer';
export { Editable } from './components/editable';
export { VideoEmbed, MapEmbed } from './components/embed';
export { Flex } from './components/flex';
export { FormControl } from './components/form-control';
export { Grid, SimpleGrid } from './components/grid';
export { Heading } from './components/heading';
export { Icon, createIcon } from './components/icon';
export { Image } from './components/image';
export { Input, NumberInput, PinInput } from './components/input';
export { KeyboardKey } from './components/kbd';
export { Link } from './components/link';
export { List } from './components/list';
export { LoaderBlock, LoaderText, LoaderCircle } from './components/loader';
export { Menu } from './components/menu'; // TODO: Need to finish
export { Modal } from './components/modal'; // TODO: Need to finish
export { Popover } from './components/popover'; // TODO: Need to finish
export { Progress, CircularProgress } from './components/progress'; // TODO: Need to finish
export { Radio, RadioGroup } from './components/radio';
export { Select } from './components/select';
export { Slider } from './components/slider';
export { Spinner } from './components/spinner';
export { Stack } from './components/stack';
export { Stats } from './components/stat';
export { Switch } from './components/switch';
export { Tabs } from './components/tabs';
export { Tag } from './components/tag';
export { Text } from './components/text';
export { Textarea } from './components/textarea';
export { Theme } from './components/theme';
export { useToast } from './components/toast';
export { Tooltip } from './components/tooltip';

export { useDisclosure, useClipboard } from '@chakra-ui/core';
