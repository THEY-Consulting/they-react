import React, { useMemo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { Source, IconListProps } from './types';

const CARD_STYLES = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
};

const DEFAULT_HEADER_STYLES = {
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  paddingY: 1,
};

const CONTENT_STYLES = {
  flex: 1,
  overflow: 'auto' as const,
  padding: 0,
};

const LIST_STYLES = {
  padding: 0,
};

const LIST_ITEM_STYLES = {
  paddingY: 1.5,
};

const ICON_STYLES_BASE = {
  minWidth: 48,
};

const EMPTY_MESSAGE_STYLES = {
  padding: 2,
  textAlign: 'center' as const,
};

export const IconList: React.FC<IconListProps> = React.memo(
  ({ sources, title = 'Data Sources', showHeader = true, maxWidth = 400, maxHeight = 600, theme }) => {
    const paperStyles = useMemo(
      () => ({
        maxWidth,
        maxHeight,
        overflow: 'hidden' as const,
        ...(theme?.card?.borderColor && {
          border: `1px solid ${theme.card.borderColor}`,
        }),
      }),
      [maxWidth, maxHeight, theme?.card?.borderColor]
    );

    const cardStyles = useMemo(
      () => ({
        ...CARD_STYLES,
        ...(theme?.card?.backgroundColor && {
          backgroundColor: theme.card.backgroundColor,
        }),
      }),
      [theme?.card?.backgroundColor]
    );

    const headerStyles = useMemo(
      () => ({
        ...DEFAULT_HEADER_STYLES,
        ...(theme?.header?.backgroundColor && {
          backgroundColor: theme.header.backgroundColor,
        }),
        ...(theme?.header?.textColor && {
          color: theme.header.textColor,
        }),
      }),
      [theme?.header?.backgroundColor, theme?.header?.textColor]
    );

    const contentStyles = useMemo(
      () => ({
        ...CONTENT_STYLES,
        ...(theme?.content?.backgroundColor && {
          backgroundColor: theme.content.backgroundColor,
        }),
      }),
      [theme?.content?.backgroundColor]
    );

    return (
      <Paper elevation={theme?.card?.elevation ?? 8} sx={paperStyles}>
        <Card sx={cardStyles}>
          {showHeader && (
            <CardHeader
              title={title}
              slotProps={{
                title: {
                  variant: 'h6',
                },
              }}
              sx={headerStyles}
            />
          )}
          <CardContent sx={contentStyles}>
            {sources.length === 0 ? (
              <Typography variant="body2" color="text.secondary" sx={EMPTY_MESSAGE_STYLES}>
                No data sources available
              </Typography>
            ) : (
              <List sx={LIST_STYLES}>
                {sources.map((source, index) => (
                  <IconListListItem
                    key={source.id}
                    source={source}
                    showDivider={index < sources.length - 1}
                  />
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      </Paper>
    );
  }
);

IconList.displayName = 'IconList';

type Props = {
  source: Source;
  showDivider: boolean;
};

const IconListListItem: React.FC<Props> = React.memo(({ source: source, showDivider }) => {
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

IconListListItem.displayName = 'IconListListItem';
