import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';
import { Pets as PetsIcon } from '@mui/icons-material';

type Entity = {
  count: number;
};

const meta = {
  title: 'form/NumberInputField',
  component: FormFactory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    fields: [
      {
        fields: [
          {
            type: 'number',
            name: 'count',
            label: 'Count',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberInputField: Story = {};

export const StartAdornment: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'number',
            name: 'count',
            label: 'Pets',
            startAdornment: <PetsIcon />,
          },
        ],
      },
    ],
  },
};

export const EndAdornment: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'number',
            name: 'count',
            label: 'Weight',
            endAdornment: 'kg',
          },
        ],
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
