import { TableBody, TableCell, TableRow, Typography } from '@mui/material';

import { formatValue } from './utils';
import { StyledTableRow } from './StyledTableRow';
import { TableColumns } from './types';
import { StickyTableActions } from './StickyTableActions';
import { StyledTableCell } from './StyledTableCell';
import { useTranslation } from 'react-i18next';

type Props<T> = {
  data: T[];
  columns: TableColumns<T>;
  page: number;
  rowsPerPage: number;
  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
  noEntriesMessage?: string;
};

export const StickyTableBody = <T,>({
  data,
  columns,
  page,
  rowsPerPage,
  onView,
  onEdit,
  noEntriesMessage,
}: Props<T>) => {
  const { t } = useTranslation();

  return (
    <TableBody>
      {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, idx) => (
        <StyledTableRow tabIndex={-1} key={idx}>
          {columns.map((column) => (
            <TableCell key={column.key ?? column.name} align={column.align}>
              {formatValue(t, row, column.name, column.format, column.empty)}
            </TableCell>
          ))}
          {(onView || onEdit) && (
            <StyledTableCell align="right">
              <StickyTableActions onView={onView} onEdit={onEdit} row={row} />
            </StyledTableCell>
          )}
        </StyledTableRow>
      ))}
      {data.length === 0 && (
        <TableRow>
          <TableCell colSpan={columns.length + (onView || onEdit ? 1 : 0)} align="center">
            <Typography color="text.disabled" align="center" fontSize="inherit">
              {noEntriesMessage ?? t('table.empty')}
            </Typography>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};
