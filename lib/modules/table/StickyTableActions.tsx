import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props<T> = {
  row: T;
  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
};

export const StickyTableActions = <T,>({ row, onView, onEdit }: Props<T>) => {
  if (onEdit) {
    return (
      <IconButton onClick={() => onEdit(row)}>
        <EditIcon />
      </IconButton>
    );
  }

  if (onView) {
    return (
      <IconButton onClick={() => onView(row)}>
        <NavigateNextIcon />
      </IconButton>
    );
  }

  return null;
};
