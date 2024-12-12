import type { Meta, StoryObj } from '@storybook/react';
import { ErrorDisplay } from '../../../lib/main';

const meta = {
  title: 'error/ErrorDisplay',
  component: ErrorDisplay,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof ErrorDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithError: Story = {
  args: {
    error: new Error('This is an error message'),
  },
};
