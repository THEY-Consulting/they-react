import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';
import { fn } from '@storybook/test';
import { Box } from '@mui/material';

type Entity = {
  name: string;
};

const meta = {
  title: 'form/FormSubmit',
  component: FormFactory,
  decorators: (Story) => (
    <Box sx={{ width: 500, height: 300 }}>
      <Story />
    </Box>
  ),
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    onSubmit: fn(),
    fields: [
      {
        fields: [{ type: 'string', name: 'name', label: 'Name' }],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Submit: Story = {};

export const WithoutDirtyNotification: Story = {
  args: {
    hideDirtyNotification: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomButton: Story = {
  args: {
    submitProps: {
      label: 'Check this out!',
      sx: {
        width: '100%',
      },
    },
  },
};
