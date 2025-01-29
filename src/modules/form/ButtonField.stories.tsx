import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';
import { Pets as PetsIcon } from '@mui/icons-material';

type Entity = {
  button: boolean;
};

const meta = {
  title: 'form/ButtonField',
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
            type: 'button',
            name: 'button',
            label: 'Submit',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {};

export const StartIcon: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'button',
            name: 'button',
            label: 'Feeding time',
            startIcon: <PetsIcon />,
          },
        ],
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'button',
            name: 'button',
            label: `Submit`,
            disabled: true,
          },
        ],
      },
    ],
  },
};
