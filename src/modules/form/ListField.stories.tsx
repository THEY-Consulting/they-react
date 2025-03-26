import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';

type Entity = {
  locations: {
    name: string;
    address: string;
  }[];
};

const meta = {
  title: 'form/ListField',
  component: FormFactory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    formData: {
      locations: [{ name: '', address: '' }],
    },
    fields: [
      {
        fields: [
          {
            type: 'list',
            name: 'locations',
            label: 'Locations',
            fields: [
              {
                type: 'string',
                name: 'locations.0.name',
                label: 'Name',
              },
              {
                type: 'string',
                name: 'locations.0.address',
                label: 'Address',
              },
            ],
            newEntry: { name: '', address: '' },
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {};

export const FixedSize: Story = {
  args: {
    formData: {
      locations: [
        { name: '', address: '' },
        { name: '', address: '' },
        { name: '', address: '' },
      ],
    },
    fields: [
      {
        fields: [
          {
            type: 'list',
            name: 'locations',
            label: 'Locations',
            fields: [
              {
                type: 'string',
                name: 'locations.0.name',
                label: 'Name',
              },
              {
                type: 'string',
                name: 'locations.0.address',
                label: 'Address',
              },
            ],
          },
        ],
      },
    ],
  },
};

export const WithoutLabel: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'list',
            name: 'locations',
            fields: [
              {
                type: 'string',
                name: 'locations.0.name',
                label: 'Name',
              },
              {
                type: 'string',
                name: 'locations.0.address',
                label: 'Address',
              },
            ],
            newEntry: { name: '', address: '' },
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
