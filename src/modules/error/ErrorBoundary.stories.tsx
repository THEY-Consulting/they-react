import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary } from '../../../lib/main';

const meta = {
  title: 'error/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

const BrokenComponent = () => {
  throw new Error('I am broken');
};

export const NoError: Story = {
  args: {
    children: 'Everything is fine',
  },
};

export const WithError: Story = {
  args: {
    children: <BrokenComponent />,
  },
};
