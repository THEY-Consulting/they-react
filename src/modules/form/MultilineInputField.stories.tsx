import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';

type Entity = {
  notes: string;
};

const meta = {
  title: 'form/MultilineInputField',
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
            type: 'multiline',
            name: 'notes',
            label: 'Notes',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory<Entity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiLineInputField: Story = {};

export const RemainingCharacters: Story = {
  args: {
    formData: {
      notes: 'Focus this field to see the remaining characters',
    },
    fields: [
      {
        fields: [
          {
            type: 'multiline',
            name: 'notes',
            label: 'Notes',
            rules: {
              maxLength: 200,
            },
          },
        ],
      },
    ],
  },
};

export const MinRows: Story = {
  args: {
    fields: [
      {
        fields: [
          {
            type: 'multiline',
            name: 'notes',
            label: 'Notes',
            minRows: 5,
          },
        ],
      },
    ],
  },
};

export const MaxRows: Story = {
  args: {
    formData: {
      notes:
        'Praesent tincidunt dictum sapien, quis tristique enim molestie at. Phasellus vulputate quam eget odio malesuada commodo. Praesent lectus elit, venenatis quis lacinia eget, commodo sit amet lacus. Aenean interdum elit sed dignissim posuere. Nulla sodales nunc sit amet ultricies porttitor. Morbi laoreet faucibus orci, vitae varius nisi blandit a. Quisque hendrerit turpis diam, nec pretium nisl feugiat eget. Nam nisl leo, finibus in commodo sit amet, ultrices sed ante. Mauris blandit augue et sem eleifend imperdiet. Nunc tristique sit amet leo vitae placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris hendrerit non diam nec commodo.',
    },
    fields: [
      {
        fields: [
          {
            type: 'multiline',
            name: 'notes',
            label: 'Notes',
            maxRows: 3,
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
