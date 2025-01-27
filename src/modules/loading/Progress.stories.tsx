import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../../../lib/main';

const meta = {
  title: 'loading/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['circular', 'linear'],
      control: { type: 'radio' },
    },
  },
  args: {
    loading: true,
    children: <>Content</>,
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {};

export const Done: Story = {
  args: {
    loading: false,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
  },
};

export const Linear: Story = {
  args: {
    variant: 'linear',
  },
};

export const Small: Story = {
  args: {
    size: 10,
  },
};

export const Big: Story = {
  args: {
    size: 80,
  },
};
