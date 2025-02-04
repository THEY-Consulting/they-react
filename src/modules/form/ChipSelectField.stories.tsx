import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/modules/form/FormFactory';
import { Pets as PetsIcon } from '@mui/icons-material';

type Entity = {
  chipselect: string[];
};

const meta = {
  title: 'form/ChipSelectField',
  component: FormFactory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    formData: { chipselect: ['blue'] },
    fields: [
      {
        fields: [
          {
            type: 'chipselect',
            name: 'chipselect',
            label: 'Colors',
            options: [
              { label: 'Red', value: 'red' },
              { label: 'Green', value: 'green' },
              { label: 'Blue', value: 'blue' },
            ],
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipSelect: Story = {};

export const WithoutLabel: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'chipselect',
            name: 'chipselect',
            options: [
              { label: 'Red', value: 'red' },
              { label: 'Green', value: 'green' },
              { label: 'Blue', value: 'blue' },
            ],
          },
        ],
      },
    ],
  },
};

export const StartIcon: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'chipselect',
            name: 'chipselect',
            label: 'Colors',
            options: [
              { label: 'Red', value: 'red' },
              { label: 'Green', value: 'green' },
              { label: 'Blue', value: 'blue' },
            ],
            startAdornment: <PetsIcon />,
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
            type: 'chipselect',
            name: 'chipselect',
            label: 'Colors',
            options: [
              { label: 'Red', value: 'red' },
              { label: 'Green', value: 'green' },
              { label: 'Blue', value: 'blue' },
            ],
            disabled: true,
          },
        ],
      },
    ],
  },
};
