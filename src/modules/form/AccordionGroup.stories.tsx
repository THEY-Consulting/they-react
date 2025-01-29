import type { Meta, StoryObj } from '@storybook/react';
import { FormFactory } from '../../../lib/main';

const meta = {
  title: 'form/AccordionGroup',
  component: FormFactory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    fields: [
      {
        accordion: true,
        fields: [
          { type: 'string', name: 'firstName', label: 'First Name' },
          { type: 'string', name: 'lastName', label: 'Last Name' },
        ],
      },
      {
        accordion: true,
        fields: [
          { type: 'string', name: 'firstName', label: 'First Name' },
          { type: 'string', name: 'lastName', label: 'Last Name' },
        ],
      },
    ],
  },
} satisfies Meta<typeof FormFactory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion: Story = {
  args: {
    fields: [
      {
        label: 'Contact information',
        accordion: true,
        expanded: true,
        fields: [
          { type: 'string', name: 'firstName', label: 'First Name' },
          { type: 'string', name: 'lastName', label: 'Last Name' },
        ],
      },
      {
        label: 'Location',
        accordion: true,
        fields: [
          { type: 'string', name: 'street', label: 'Street' },
          { type: 'string', name: 'city', label: 'City' },
        ],
      },
    ],
  },
};

export const Expanded: Story = {
  args: {
    fields: [
      {
        label: 'Contact information',
        accordion: true,
        expanded: true,
        fields: [
          { type: 'string', name: 'firstName', label: 'First Name' },
          { type: 'string', name: 'lastName', label: 'Last Name' },
        ],
      },
    ],
  },
};

export const WithoutLabel: Story = {
  args: {
    fields: [
      {
        accordion: true,
        fields: [
          { type: 'string', name: 'firstName', label: 'First Name' },
          { type: 'string', name: 'lastName', label: 'Last Name' },
        ],
      },
    ],
  },
};
