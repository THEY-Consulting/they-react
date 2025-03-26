import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';
import { Home as HomeIcon } from '@mui/icons-material';
import { Place as PlaceIcon } from '@mui/icons-material';

type Entity = {
  name: string;
};

const meta = {
  title: 'form/StringInputField',
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
            type: 'string',
            name: 'name',
            label: 'Name',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StringInputField: Story = {};

export const Clearable: Story = {
  args: {
    formData: {
      name: 'This can be cleared',
    },
    fields: [
      {
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Name',
            clearable: true,
          },
        ],
      },
    ],
  },
};

export const StartAdornment: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Address',
            startAdornment: <HomeIcon />,
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
            type: 'string',
            name: 'name',
            label: 'Location',
            endAdornment: <PlaceIcon />,
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
            type: 'string',
            name: 'name',
            label: 'Name',
            disabled: true,
          },
        ],
      },
    ],
  },
};
