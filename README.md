# They React

Collection of modules for an easier React life

##### Table of Contents

- [Use in your own project](#use-in-your-own-project)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
- [Modules](#modules)
  - [Clipboard](#clipboard)
    - [CopyToClipboardIconButton](#copytoclipboardiconbutton)
- [Contributing](#contributing)
  - [Prerequisites](#prerequisites-1)
  - [Local Dev](#local-dev)
  - [Deployment](#deployment)

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
  return (
    <CopyToClipboardIconButton value="Hello World!" />
  );
}
```

## Modules

### Clipboard

#### CopyToClipboardIconButton

A button that copies a given value to the clipboard.

```jsx
import { CopyToClipboardIconButton } from '@they-consulting/react';

const MyComponent = () => {
  return (
    <CopyToClipboardIconButton 
            value="Hello World!" 
    />
  );
}
```



## Contributing

### Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) optional, recommended
- [nodejs](https://nodejs.org/en) version 20.X

### Local Dev / Storybook

Install dependencies:

```bash
npm install
```

Start the Storybook server:

```bash
npm run dev
```

### Deployment

Storybook is automatically deployed to GitHub Pages when a new commit is pushed to the `main` branch.
A GitHub action runs that builds and deploys the storybook to the `gh-pages` branch.
