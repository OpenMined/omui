<!-- TODO: Add a logo here -->

![Tests](https://img.shields.io/github/workflow/status/OpenMined/omui/Tests)
![Coverage](https://img.shields.io/codecov/c/github/OpenMined/omui)
![License](https://img.shields.io/github/license/OpenMined/omui)
![Version](https://img.shields.io/npm/v/@openmined/omui)
![OpenCollective](https://img.shields.io/opencollective/all/openmined)

# OpenMined UI

This project is our user interface component library, built in [React.js](https://reactjs.org/), with imports for [Framer](https://framer.com/). This allows our design team and our UI development team to have a single source of truth between what we design and what we use in building apps and websites.

The project is set up in two folder:

- `omui` - The main React.js project, which uses [Chakra UI](https://chakra-ui.com/) and [Styled System](https://styled-system.com/) as our base. We also live develop our components using [Storybook](https://storybook.js.org/) and build them using [Parcel](https://github.com/parcel-bundler/parcel).
- `omui.framerfx` - The folder-based Framer project, which allows us to use real React components in our UI prototypes.

## Basic Installation

If you're looking to begin developing a user-interface with OMUI, you can install the package directly via [Yarn](https://yarnpkg.com/):

```bash
yarn add @openmined/omui
```

Or if you prefer [NPM](https://npmjs.com):

```bash
npm install --save @openmined/omui
```

## Usage

All components are exported via named exports - we don't have a default export. They can be imported at the top of any React file like such:

```javascript
import { Alert } from '@openmined/omui';
```

They can then be used in JSX like such:

```jsx
const MyGreatComponent = (props) => {
  const alertTitle = 'Aww yeah...';
  const alertStatus = 'success';
  const alertText = 'Nice job using an alert, you did it right!';

  return (
    <Alert title={alertTitle} status={alertStatus}>
      {alertText}
    </Alert>
  );
};
```

In order to use the beautiful theme that OMUI provides you, you need to wrap your entire React application in a `<Theme>` component. This already has the OMUI theme and any CSS resets loaded in, so you don't need to do this yourself. The following is roughly how you might wrap your React application, but your particular usage may vary slightly:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from '@openmined/omui';

import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  rootElement
);
```

## Support

For support in using this library, please join the **#lib_omui** Slack channel. If you'd like to follow along with any code changes to the library, please join the **#code_omui** Slack channel. [Click here to join our Slack community!](https://slack.openmined.org)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)

