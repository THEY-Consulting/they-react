import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';

type Entity = {
  name: string;
  street: string;
};

const meta = {
  title: 'form/DividerLabel',
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
          {
            type: 'divider',
            name: 'name',
            label: 'Divider',
          },
          {
            type: 'string',
            name: 'street',
            label: 'Street',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DividerLabel: Story = {};

export const WithoutLabel: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Name',
          },
          {
            type: 'divider',
            name: 'name',
          },
          {
            type: 'string',
            name: 'street',
            label: 'Street',
          },
        ],
      },
    ],
  },
};
