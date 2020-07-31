import { addons } from '@storybook/addons';

import storybookTheme from './theme';

addons.setConfig({
  theme: storybookTheme,
  panelPosition: 'right',
  selectedPanel: 'storybookjs/knobs/panel'
});
