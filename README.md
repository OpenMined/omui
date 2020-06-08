# OpenMined UI

This project is our user interface component library, built in [React.js](https://reactjs.org/), with imports for [Framer](https://framer.com/). This allows our design team and our UI development team to have a single source of truth between what we design and what we use in building apps and websites.

The project is set up in two folder:

- `omui` - The main React.js project, which uses [Chakra UI](https://chakra-ui.com/) and [Styled System](https://styled-system.com/) as our base. We also live develop our components using [Storybook](https://storybook.js.org/) and build them using [Rollup](https://rollupjs.org/).
- `omui.framerfx` - The folder-based Framer project, which allows us to use real React components in our UI prototypes.
