import { IconButton, TableHead, TableRow } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { StyledTableCell } from './StyledTableCell';
import { TableColumns } from './types';

type Props<T> = {
  columns: TableColumns<T>;
  onAdd?: () => void;
  extraCol?: boolean;
};

export const StickyTableHead = <T,>({ columns, onAdd, extraCol }: Props<T>) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <StyledTableCell
            key={column.key ?? column.name}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </StyledTableCell>
        ))}
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
