import type { Meta, StoryObj } from '@storybook/react';
import { Pets as PetsIcon } from '@mui/icons-material';
import { CopyToClipboardIconButton } from '../../../lib/main';

const meta = {
  title: 'Clipboard/CopyToClipboardIconButton',
  component: CopyToClipboardIconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    fontSize: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: {
    value: 'Hello, world!',
    hoverMessage: 'Copy to clipboard',
    progressMessage: 'Copying...',
    successMessage: 'Copied!',
  },
} satisfies Meta<typeof CopyToClipboardIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    fontSize: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    fontSize: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    fontSize: 'large',
  },
};
export const NoValue: Story = {
  args: {
    value: undefined,
  },
};

export const CustomIcon: Story = {
  args: {
    children: <PetsIcon />,
  },
};

export const CustomHover: Story = {
  args: {
    hoverMessage: 'You should copy this!',
  },
};

export const AsyncValue: Story = {
  args: {
    value: async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('This took a while to generate!');
        }, 2000);
      });
    },
  },
};
