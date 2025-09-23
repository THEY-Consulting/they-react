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
export const Formatter: StoryObj<typeof StickyTable<FormattingTableEntity>> = {
  args: {
    columns: [
      {
        name: 'item',
        label: 'Item',
        format: (value: string) => value.toUpperCase(),
      },
      {
        name: 'date',
        label: 'Date',
        format: formatDateString,
      },
      {
        name: 'price',
        label: 'Price',
        format: formatCurrency,
      },
      {
        name: 'since',
        label: 'Since',
        format: formatDateTimeString,
      },
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

type SortableTableEntity = {
  name: string;
  age: number;
  score: number;
  date: string;
};

export const WithSorting: StoryObj<typeof StickyTable<SortableTableEntity>> = {
  args: {
    columns: [
      {
        name: 'name',
        label: 'Name',
        sortable: true,
      },
      {
        name: 'age',
        label: 'Age',
        sortable: true,
      },
      {
        name: 'score',
        label: 'Score',
        sortable: true,
        // Custom sort function for descending score by default
        sortFunction: (a: number, b: number) => b - a,
      },
      {
        name: 'date',
        label: 'Date',
        sortable: true,
        format: formatDateString,
      },
    ],
    data: [
      {
        name: 'Alice Johnson',
        age: 28,
        score: 95,
        date: '2024-01-15',
      },
      {
        name: 'Bob Smith',
        age: 34,
        score: 87,
        date: '2024-02-20',
      },
      {
        name: 'Charlie Brown',
        age: 22,
        score: 92,
        date: '2024-01-10',
      },
      {
        name: 'Diana Prince',
        age: 31,
        score: 98,
        date: '2024-03-05',
      },
      {
        name: 'Edward Norton',
        age: 29,
        score: 89,
        date: '2024-02-28',
      },
    ],
  },
};
