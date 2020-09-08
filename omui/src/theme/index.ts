import components from './components';
import foundations from './foundations';
import styles from './styles';

import { merge } from '@chakra-ui/utils';

import chakraTheme from '@chakra-ui/theme';

const overrides = {
  components,
  ...foundations,
  styles
};

const theme = merge(chakraTheme, overrides);

export type Theme = typeof theme;

export default theme;

export const {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Checkbox,
  CloseButton,
  Code,
  Drawer,
  Editable,
  Form,
  FormLabel,
  Heading,
  Input,
  Kbd,
  Link,
  Menu,
  Modal,
  NumberInput,
  PinInput,
  Popover,
  Progress,
  Radio,
  Select,
  Skeleton,
  SkipLink,
  Slider,
  Spinner,
  Stat,
  Switch,
  Tabs,
  Tag,
  Textarea,
  Tooltip
} = theme.components;
