import React, { useMemo } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Source } from './types.ts';

const LIST_ITEM_STYLES = {
  paddingY: 1.5,
};
const ICON_STYLES_BASE = {
  minWidth: 48,
};
type Props = {
  source: Source;
  showDivider: boolean;
};
export const IconListListItem: React.FC<Props> = React.memo(({ source: source, showDivider }) => {
  const iconStyles = useMemo(() => {
    if (source.color) {
      return {
        ...ICON_STYLES_BASE,
        color: source.active ? source.color : 'action.disabled',
      };
    }

    return {
      ...ICON_STYLES_BASE,
      color: source.active ? 'primary.main' : 'action.disabled',
    };
  }, [source.active, source.color]);

  const primaryTextProps = useMemo(
    () => ({
      variant: 'body2' as const,
      fontWeight: source.active ? 'medium' : 'normal',
    }),
    [source.active]
  );

  const secondaryTextProps = useMemo(
    () => ({
      variant: 'caption' as const,
      color: source.active ? 'text.secondary' : 'text.disabled',
    }),
    [source.active]
  );

  const slotProps = useMemo(
    () => ({
      primary: primaryTextProps,
      secondary: secondaryTextProps,
    }),
    [primaryTextProps, secondaryTextProps]
  );

  return (
    <ListItem divider={showDivider} sx={LIST_ITEM_STYLES}>
      <ListItemIcon sx={iconStyles}>{source.icon}</ListItemIcon>
      <ListItemText primary={source.name} secondary={source.description} slotProps={slotProps} />
    </ListItem>
  );
});
