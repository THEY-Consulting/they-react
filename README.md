# They React

Collection of modules for an easier React life

##### Table of Contents

- [Use in your own project](#use-in-your-own-project)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
- [Modules](#modules)
  - [Clipboard](#clipboard)
    - [useCopyToClipboard](#usecopytoclipboard)
    - [CopyToClipboardIconButton](#copytoclipboardiconbutton)
- [Contributing](#contributing)
  - [Prerequisites](#prerequisites-1)
  - [Local Dev](#local-dev)
  - [Adding new dependencies](#adding-new-dependencies)
  - [Deployment](#deployment)
    - [NPM](#npm)
    - [Docs](#docs)

## Use in your own project

See the [Storybook](https://react.they-code.de/) for a list of available UI components.

### Prerequisites

- [React](https://react.dev/)
- [MUI](https://mui.com/)

### Usage

Install the package:

```bash
npm install @they-consulting/react
```

```bash
yarn add @they-consulting/react
```

Then you can use the components in your project:

```jsx
import { CopyToClipboardIconButton } from '@they-consulting/react';

const MyComponent = () => {
  return <CopyToClipboardIconButton value="Hello World!" />;
};
```

## Modules

### Clipboard

#### useCopyToClipboard

A hook that copies a given value to the clipboard.

```jsx
import { useCopyToClipboard } from '@they-consulting/react';

const MyComponent = () => {
  const { copied, handleCopy } = useCopyToClipboard('Hello World!');

  return <button onClick={handleCopy}>{copied ? 'Copied' : 'Copy to clipboard'}</button>;
};
```

#### CopyToClipboardIconButton

A button that copies a given value to the clipboard.

```jsx
import { CopyToClipboardIconButton } from '@they-consulting/react';

const MyComponent = () => {
  return <CopyToClipboardIconButton value="Hello World!" />;
};
```

## Contributing

### Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) optional, recommended
- [nodejs](https://nodejs.org/en) version 20.X

### Local Dev

Install dependencies:

```bash
npm install
```

Start the Storybook server:

```bash
npm run dev
```

### Adding new dependencies

If you add a new dependency, you need to decide if it should be bundled with the library or not.
In case it should be bundled, add it to the `dependencies` in the `package.json`.
Otherwise, include it in both `devDependencies` and `peerDependencies` instead.
Also make sure to include peer dependencies that should not be bundled to the externals in `vite.config.ts`.
For this to work, the import source must be identical to the external entry:

```typescript
import { Box } from '@mui/material'; // this matches the external entry and will not be bundled

import { Box } from '@mui/material/Box'; // this doesn't match and will be bundled
```

### Deployment

#### NPM

The package is automatically published to npm when a new release is created.
Before creating a new release, make sure to update the version in the `package.json`.
We use [semantic versioning](https://semver.org/).

#### Docs

Storybook is automatically deployed to GitHub Pages when a new commit is pushed to the `main` branch.
A GitHub action runs that builds and deploys the storybook to the `gh-pages` branch.
