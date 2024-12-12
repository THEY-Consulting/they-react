import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { Alert } from '@mui/material';
import Box from '@mui/material/Box';
import { TableColumns } from './types';
import { Progress } from '../loading/Progress';
import { StickyTableHead } from './StickyTableHead';
import { StickyTableBody } from './StickyTableBody';
import { useState } from 'react';
import { useCan } from '../auth/hooks';

const ROWS_PER_PAGE_OPTIONS = [50, 100, 200];

type Props<T> = {
  entity?: string;
  data?: T[];
  columns: TableColumns<T>;
  isPending: boolean;
  error?: Error | null;
  onView?: (row: T) => void;
  onAdd?: () => void;
  onEdit?: (row: T) => void;
  noEntriesMessage?: string;
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
}: Props<T>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_OPTIONS[0]);

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

  if (error) {
    return (
      <Box mb={3}>
        <Alert severity="error">Es ist leider ein Fehler aufgetreten: "{error.message}"</Alert>
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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <StickyTableHead
            columns={columns}
            onAdd={canCreate ? onAdd : undefined}
            extraCol={(canView && !!onView) || (canEdit && !!onEdit)}
          />
          <StickyTableBody
            data={data}
            columns={columns}
            page={page}
            rowsPerPage={rowsPerPage}
            onView={canView ? onView : undefined}
            onEdit={canEdit ? onEdit : undefined}
            noEntriesMessage={noEntriesMessage}
          />
        </Table>
      </TableContainer>
      {data.length ? (
        <TablePagination
          rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : null}
    </Paper>
  );
};
