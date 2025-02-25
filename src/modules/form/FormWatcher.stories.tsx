import type { Meta, StoryObj } from '@storybook/react';
import { Auditable, AuthSubject, FormFactory, FormFields } from '../../../lib/main';
import { useState } from 'react';
import { WatchObserver } from 'react-hook-form';

type Entity = {
  name: string;
  street: string;
} & Partial<AuthSubject> &
  Auditable;

const meta = {
  title: 'form/FormWatcher',
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

export const FormWatcher: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string>('');
    const watcher: WatchObserver<Entity> = (...args) => {
      setValue(JSON.stringify(args, null, 2));
    };
    return (
      <>
        <FormFactory<Entity> fields={args.fields as never as FormFields<Entity>} onChange={watcher} />
        <pre style={{ backgroundColor: '#fafafa', padding: '16px' }}>{value}</pre>
      </>
    );
  },
};
