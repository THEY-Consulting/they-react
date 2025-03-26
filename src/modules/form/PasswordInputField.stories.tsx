import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';

type Entity = {
  password: string;
};

const meta = {
  title: 'form/PasswordInputField',
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
            type: 'password',
            name: 'password',
            label: 'Password',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordInputFieldStories: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
