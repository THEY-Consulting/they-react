import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { enGB } from 'date-fns/locale/en-GB';

type Entity = {
  time: string;
};

const meta = {
  title: 'form/TimeField',
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
            type: 'time',
            name: 'time',
            label: 'Arrival time',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimeField: Story = {};

export const WithoutLabel: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'time',
            name: 'time',
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
            type: 'time',
            name: 'time',
            label: 'Arrival time',
            disabled: true,
          },
        ],
      },
    ],
  },
};
