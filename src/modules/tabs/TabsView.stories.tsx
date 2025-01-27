import type { Meta, StoryObj } from '@storybook/react';
import { TabsView } from '../../../lib/main';
import { Button, createTheme, IconButton, ThemeProvider, Typography } from '@mui/material';
import { fn } from '@storybook/test';
import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';

const theme = createTheme();

const meta = {
  title: 'tabs/TabsView',
  component: TabsView,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    tabs: [
      {
        index: 'tab1',
        label: 'Tab 1',
        content: <div>Tab 1 content</div>,
      },
      {
        index: 'tab2',
        label: 'Tab 2',
        content: <div>Tab 2 content</div>,
      },
      {
        index: 'tab3',
        label: 'Tab 3',
        content: <div>Tab 3 content</div>,
      },
    ],
    onChange: fn(),
  },
} satisfies Meta<typeof TabsView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tabs: Story = {
  args: {},
};

export const Initial: Story = {
  args: {
    initial: 'tab2',
  },
};

export const Controlled: Story = {
  args: {
    active: 'tab3',
  },
};

export const PrefixElement: Story = {
  args: {
    tabViewToggle: (
      <IconButton>
        <MenuIcon />
      </IconButton>
    ),
  },
};

export const SuffixElement: Story = {
  args: {
    aside: (
      <IconButton>
        <CloseIcon />
      </IconButton>
    ),
  },
};

const Panel = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="outlined" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <Typography>Clicked {count} times</Typography>
    </>
  );
};

export const AutoDismount: Story = {
  args: {
    autoDismount: true,
    tabs: [
      {
        index: 'tab1',
        label: 'Tab 1',
        content: <Panel />,
      },
      {
        index: 'tab2',
        label: 'Tab 2',
        content: <Panel />,
      },
    ],
  },
};

export const WithoutDismount: Story = {
  args: {
    ...AutoDismount.args,
    autoDismount: false,
  },
};
