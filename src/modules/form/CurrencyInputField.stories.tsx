import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';

type Entity = {
  currency: number;
};

const meta = {
  title: 'form/CurrencyInputField',
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
            type: 'currency',
            name: 'currency',
            label: 'Price',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrencyInput: Story = {};

export const WithoutLabel: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'currency',
            name: 'currency',
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
            type: 'currency',
            name: 'currency',
            label: 'Price',
            disabled: true,
          },
        ],
      },
    ],
  },
};
