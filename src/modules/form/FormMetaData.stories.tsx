import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';

type Entity = {
  name: string;
  createdAt: string;
  createdBy: string;
  editedAt: string;
  editedBy: string;
};

const meta = {
  title: 'form/FormMetaData',
  component: FormFactory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    formData: {
      name: 'John Doe',
      createdAt: '2021-01-01',
      createdBy: 'Jack Doe',
      editedAt: '2021-01-02',
      editedBy: 'Jane Doe',
    },
    fields: [
      {
        fields: [{ type: 'string', name: 'name', label: 'Name' }],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MetaData: Story = {};

export const CreatedBy: Story = {
  args: {
    formData: {
      name: 'John Doe',
      createdAt: '2021-01-01',
      createdBy: 'Jack Doe',
    },
  },
};
