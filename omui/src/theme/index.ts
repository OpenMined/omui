import components from './components';
import config from './config';
import foundations from './foundations';
import styles from './styles';

const theme = {
  components,
  config,
  ...foundations,
  styles
};

export type Theme = typeof theme;

export default theme;
