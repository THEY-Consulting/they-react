import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';
import { Pets as PetsIcon } from '@mui/icons-material';

type Entity = {
  choice: string;
};

const meta = {
  title: 'form/SelectField',
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
            type: 'select',
            name: 'choice',
            label: 'Choose',
            options: [
              { value: 'cats', label: 'Cats' },
              { value: 'dogs', label: 'Dogs' },
              { value: 'birds', label: 'Birds' },
            ],
            sx: { width: 200 },
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectField: Story = {};

export const StartAdornment: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'select',
            name: 'choice',
            label: 'Choose',
            options: [
              { value: 'cats', label: 'Cats' },
              { value: 'dogs', label: 'Dogs' },
              { value: 'birds', label: 'Birds' },
            ],
            startAdornment: <PetsIcon />,
            sx: { width: 200 },
          },
        ],
      },
    ],
  },
};

export const Autocomplete: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'select',
            name: 'choice',
            label: 'Choose',
            options: [
              { value: 'cats', label: 'Cats' },
              { value: 'dogs', label: 'Dogs' },
              { value: 'birds', label: 'Birds' },
            ],
            sx: { width: 200 },
            autocomplete: true,
          },
        ],
      },
    ],
  },
};
