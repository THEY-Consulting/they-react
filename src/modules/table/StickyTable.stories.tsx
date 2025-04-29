import type { Meta, StoryObj } from '@storybook/react';
import { formatCurrency, formatDateString, formatDateTimeString, StickyTable } from '../../../lib/main';
import { Box } from '@mui/material';
import { fn } from '@storybook/test';
import { formatISO } from 'date-fns';
import { TFunction } from 'i18next';

type TableEntity = {
  firstName: string;
  lastName: string;
};

const meta = {
  title: 'table/StickyTable',
  component: StickyTable,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    columns: [
      {
        name: 'firstName',
        label: 'First Name',
      },
      {
        name: 'lastName',
        label: 'Last Name',
      },
    ],
    data: [
      {
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
      },
    ],
  },
} satisfies Meta<typeof StickyTable<TableEntity>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  args: {},
};

export const Empty: Story = {
  args: {
    data: [],
  },
};

export const CustomEmpty: Story = {
  args: {
    data: [],
    noEntriesMessage: 'Nothing here!',
  },
};

export const Pending: Story = {
  args: {
    isPending: true,
  },
  render: (args) => {
    return (
      <Box sx={{ width: 200 }}>
        <StickyTable {...args} />
      </Box>
    );
  },
};

export const WithError: Story = {
  args: {
    error: new Error('Something went wrong'),
  },
};

export const Sticky: Story = {
  args: {
    sx: { height: 400 },
    data: Array.from({ length: 100 }, (_, i) => ({ firstName: `John ${i}`, lastName: `Doe ${i}` })),
  },
};

export const WithViewActions: Story = {
  args: {
    onView: fn(),
  },
};

export const WithEditActions: Story = {
  args: {
    onView: fn(),
    onAdd: fn(),
    onEdit: fn(),
  },
};

type FormattingTableEntity = {
  item: string;
  date: string;
  price: number;
  since: string;
};
export const Formatter: Story = {
  args: {
    columns: [
      // @ts-expect-error we change the data structure for this story
      {
        name: 'item',
        label: 'Item',
        format: (value: string) => value.toUpperCase(),
      },
      // @ts-expect-error we change the data structure for this story
      {
        name: 'date',
        label: 'Date',
        format: formatDateString,
      },
      // @ts-expect-error we change the data structure for this story
      {
        name: 'price',
        label: 'Price',
        format: formatCurrency,
      },
      // @ts-expect-error we change the data structure for this story
      {
        name: 'since',
        label: 'Since',
        format: formatDateTimeString,
      },
      // @ts-expect-error we change the data structure for this story
      {
        name: 'item',
        label: 'Combined',
        format: (item: string, _: TFunction, row: FormattingTableEntity) => `${item} (${row.price})`,
      },
    ],
    data: [
      {
        item: 'apple',
        date: formatISO(new Date()),
        price: 1.23,
        since: formatISO(new Date()),
      },
      {
        item: 'banana',
        date: formatISO(new Date()),
        price: 2.345,
        since: formatISO(new Date()),
      },
    ],
  },
};
