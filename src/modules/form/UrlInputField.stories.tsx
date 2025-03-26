import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';

type Entity = {
  url: string;
};

const meta = {
  title: 'form/UrlInputField',
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
            type: 'url',
            name: 'url',
            label: 'Website',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UrlInputField: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
