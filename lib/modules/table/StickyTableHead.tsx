import { IconButton, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { StyledTableCell } from './StyledTableCell';
import { TableColumns, SortState, SortDirection } from './types';
import { Path } from 'react-hook-form';

type Props<T> = {
  columns: TableColumns<T>;
  onAdd?: () => void;
  extraCol?: boolean;
  sortState?: SortState<T>;
  onSort?: (column: Path<T>) => void;
};

export const StickyTableHead = <T,>({ columns, onAdd, extraCol, sortState, onSort }: Props<T>) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => {
          const isActive = sortState?.column === column.name;
          const direction: SortDirection | false = isActive ? sortState.direction : false;

          return (
            <StyledTableCell
              key={column.key ?? column.name}
              align={column.align}
              style={{ minWidth: column.minWidth }}
              sortDirection={direction}
            >
              {column.sortable && onSort ? (
                <TableSortLabel
                  active={isActive}
                  direction={direction || 'asc'}
                  onClick={() => onSort(column.name)}
                  sx={{
                    color: 'inherit !important',
                    '& .MuiTableSortLabel-icon': {
                      color: 'inherit !important',
                    },
                  }}
                >
                  {column.label}
                </TableSortLabel>
              ) : (
                column.label
              )}
            </StyledTableCell>
          );
        })}
        {(onAdd || extraCol) && (
          <StyledTableCell align="right">
            {onAdd && (
              <IconButton onClick={() => onAdd()} sx={{ color: 'white' }}>
                <AddIcon />
              </IconButton>
            )}
          </StyledTableCell>
        )}
      </TableRow>
    </TableHead>
  );
};
