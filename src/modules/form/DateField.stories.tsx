import type { Meta, StoryObj } from '@storybook/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enGB } from 'date-fns/locale/en-GB';
import { FormFactory } from '../../../lib/main';

type Entity = {
  date: string;
};

const meta = {
  title: 'form/DateField',
  component: FormFactory,
  decorators: (Story) => (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
      <Story />
    </LocalizationProvider>
  ),
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    fields: [
      {
        fields: [
          {
            type: 'date',
            name: 'date',
            label: 'Created At',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateField: Story = {};

export const WithoutLabel: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'date',
            name: 'date',
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
            type: 'date',
            name: 'date',
            label: 'Created At',
            disabled: true,
          },
        ],
      },
    ],
  },
};
