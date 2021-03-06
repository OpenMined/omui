/*
  Pre-Framer todo's:
  - Visual regression resting with Chromatic
  - Consider using smart knobs: https://github.com/storybookjs/addon-smart-knobs
  - Get all helpers to reference the new component themes or consider getting rid of helpers if possible
  - Consider adding any new components added by v1
  - Consider getting rid of Stack and other redundant helper components
  - Figure out whether or not to use items as DOM children or as array config and apply mentality across all components
  - Check all components for responsiveness
  - Migrate components over to Framer

  Post-Framer todo's:
  - Go through and remove all various @ts-ignore issues
  - Look into various TODO's
  - Create a form component, similar to SR wizard (Patrick), and consider regrouping form components in Storybook
  - Consider supporting another color mode
  - Provide ample stories for each component (story, docs, and props): https://github.com/storybookjs/storybook/blob/next/addons/docs/README.md
  - Work on theming of docs:
    - https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/theming.md#storybook-theming
    - https://github.com/storybookjs/storybook/blob/next/addons/docs/react/README.md
  - Create MDX documentation for each component in Storybook: https://medium.com/storybookjs/rich-docs-with-storybook-mdx-61bc145ae7bc
  - Cypress testing:
    - https://itnext.io/cypress-storybook-keeping-test-scenario-data-and-component-rendering-in-one-place-c57b23cc1640
    - https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core
*/

export {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from './components/accordion';

export {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from './components/alert';

export {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from './components/alert-dialog';

export { AlertBox } from './components/alert-box';
export { AspectRatio } from './components/aspect-ratio';
export { Avatar, AvatarBadge, AvatarGroup } from './components/avatar';
export { Badge } from './components/badge';
export { Box } from './components/box';

export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator
} from './components/breadcrumb';

export { Button, IconButton, ButtonGroup } from './components/button';
export { Center, Square, Circle } from './components/center';
export { Checkbox, CheckboxGroup } from './components/checkbox';
export { Code, CodeEditor } from './components/code';
export { Collapse } from './components/collapse';
export { Container } from './components/container';
export { Divider } from './components/divider';
export {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from './components/drawer';
export { Editable } from './components/editable';
export { VideoEmbed, MapEmbed } from './components/embed';
export { Flex, Spacer } from './components/flex';
export { FormControl } from './components/form-control';
export { Grid, GridItem, SimpleGrid } from './components/grid';
export { Heading } from './components/heading';
export { Icon, createIcon } from './components/icon';
export { Image } from './components/image';

export {
  Input,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField
} from './components/input';

export { KeyboardKey } from './components/kbd';
export { Link } from './components/link';
export { List, ListItem, ListIcon } from './components/list';
export { LoaderBlock, LoaderText, LoaderCircle } from './components/loader';

export {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider
} from './components/menu';

export {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from './components/modal';

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton
} from './components/popover';

export {
  LinearProgress,
  CircularProgress,
  CircularProgressLabel
} from './components/progress';

export { Radio, RadioGroup } from './components/radio';
export { Select } from './components/select';

export {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from './components/slider';

export { Spinner } from './components/spinner';
export { Stack, HStack, VStack, StackDivider } from './components/stack';

export {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup
} from './components/stat';

export { Switch } from './components/switch';
export { Tabs, TabList, TabPanel, TabPanels } from './components/tabs';

export {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton
} from './components/tag';

export { Text, Paragraph } from './components/text';
export { Textarea } from './components/textarea';
export { Theme } from './components/theme';
export { useToast } from './components/toast';
export { Tooltip } from './components/tooltip';
export { Fade, ScaleFade, Slide, SlideFade } from './components/transitions';
export { Wrap, WrapItem } from './components/wrap';

export { VisuallyHidden, VisuallyHiddenInput } from '@chakra-ui/core';

export {
  useDisclosure,
  useClipboard,
  useBreakpointValue,
  useControllableState,
  useMediaQuery,
  useTheme,
  useToken
} from '@chakra-ui/core';
