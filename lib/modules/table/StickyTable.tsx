import { Alert, Box, SxProps, Table, TableContainer, TablePagination, Theme } from '@mui/material';
import { TableColumns, SortState } from './types';
import { Progress } from '../loading/Progress';
import { StickyTableHead } from './StickyTableHead';
import { StickyTableBody } from './StickyTableBody';
import { useState } from 'react';
import { useCan } from '../auth/hooks';
import { i18nTheyReact } from '../locales/i18n';
import { I18nextProvider } from 'react-i18next';
import { sortData } from './utils';
import { Path } from 'react-hook-form';

const ROWS_PER_PAGE_OPTIONS = [50, 100, 200];

type Props<T> = {
  entity?: string;
  data?: T[];
  columns: TableColumns<T>;
  isPending?: boolean;
  error?: Error | null;
  onView?: (row: T) => void;
  onAdd?: () => void;
  onEdit?: (row: T) => void;
  noEntriesMessage?: string;
  sx?: SxProps<Theme>;
};

export const StickyTable = <T,>({
  entity,
  data = [],
  columns,
  isPending,
  error,
  onView,
  onAdd,
  onEdit,
  noEntriesMessage,
  sx,
}: Props<T>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_OPTIONS[0]);
  const [sortState, setSortState] = useState<SortState<T>>({
    column: null,
    direction: 'asc',
  });

  // If no entity is provided, we assume the user is allowed to do everything
  const canView = useCan('read', entity) || !entity;
  const canCreate = useCan('create', entity) || !entity;
  const canEdit = useCan('update', entity) || !entity;

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSort = (column: Path<T>) => {
    setSortState((prevState) => {
      if (prevState.column === column) {
        // Toggle direction if same column
        return {
          column,
          direction: prevState.direction === 'asc' ? 'desc' : 'asc',
        };
      } else {
        // New column, start with ascending
        return {
          column,
          direction: 'asc',
        };
      }
    });
    // Reset to first page when sorting changes
    setPage(0);
  };

  // Sort the data before pagination
  const sortedData = sortData(data, columns, sortState);

  if (error) {
    return (
      <Box mb={3}>
        <Alert severity="error">{error.message}</Alert>
      </Box>
    );
  }
  if (isPending) {
    return (
      <Box sx={{ paddingTop: 2 }}>
        <Progress loading={isPending} variant="linear" />
      </Box>
    );
  }
  return (
    <I18nextProvider i18n={i18nTheyReact}>
      <TableContainer sx={sx}>
        <Table stickyHeader aria-label="sticky table">
          <StickyTableHead
            columns={columns}
            onAdd={canCreate ? onAdd : undefined}
            extraCol={(canView && !!onView) || (canEdit && !!onEdit)}
            sortState={sortState}
            onSort={handleSort}
          />
          <StickyTableBody
            data={sortedData}
            columns={columns}
            page={page}
            rowsPerPage={rowsPerPage}
            onView={canView ? onView : undefined}
            onEdit={canEdit ? onEdit : undefined}
            noEntriesMessage={noEntriesMessage}
          />
        </Table>
      </TableContainer>
      {sortedData.length ? (
        <TablePagination
          rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
          component="div"
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : null}
    </I18nextProvider>
  );
};
