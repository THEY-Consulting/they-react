import type { Meta, StoryObj } from '@storybook/react';
import { AbacProvider, Can } from '../../../lib/main';
import { Typography } from '@mui/material';

const meta = {
  title: 'auth/Can',
  component: Can,
  decorators: (Story) => (
    <AbacProvider rules={[{ subject: 'post', action: 'read' }]}>
      <Story />
    </AbacProvider>
  ),
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    I: {
      options: ['read', 'create', 'update', 'delete', 'manage'],
      control: { type: 'select' },
    },
    a: {
      options: ['post', 'comment'],
      control: { type: 'select' },
    },
  },
  args: {
    children: <Typography>Access granted</Typography>,
  },
} satisfies Meta<typeof Can>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccessGranted: Story = {
  // @ts-expect-error how can we provide the correct auth subject?
  args: {
    I: 'read',
    a: 'post',
  },
};

export const AccessDenied: Story = {
  // @ts-expect-error how can we provide the correct auth subject?
  args: {
    I: 'create',
    a: 'post',
  },
};
