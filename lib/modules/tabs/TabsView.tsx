import React, { useCallback, useEffect, useState } from 'react';
import { Grid, Tab, Tabs, Theme, useMediaQuery } from '@mui/material';
import { TabPanel } from './TabPanel';
import { TabItem } from './types';
import { ErrorBoundary } from '../error/ErrorBoundary';

const isEventWithKeys = (
  event: React.SyntheticEvent
): event is React.KeyboardEvent<Element> | React.MouseEvent<Element> =>
  'metaKey' in event && 'ctrlKey' in event;

type Props = {
  tabs: TabItem[];
  active?: string;
  initial?: string;
  onChange?: (value: string) => void;
  tabViewToggle?: React.ReactNode;
  aside?: React.ReactNode;
  autoDismount?: boolean;
};

export const TabsView: React.FC<Props> = ({
  tabs,
  initial,
  active: overwriteActive,
  onChange,
  tabViewToggle,
  aside,
  autoDismount,
}) => {
  if (!tabs.length) {
    throw new Error('TabsView: No tabs provided');
  }

  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const [active, setActive] = useState(initial ?? tabs[0].index);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, value: string) => {
      if (isEventWithKeys(event) && (event.metaKey || event.ctrlKey)) {
        // Let browser handle native behaviour, e.g. open in new tab
        return;
      }

      setActive(value);
      onChange?.(value);
      event.preventDefault();
    },
    [onChange]
  );

  useEffect(() => {
    if (overwriteActive && overwriteActive !== active) {
      setActive(overwriteActive);
    }
  }, [overwriteActive, active]);

  return (
    <>
      <Grid container spacing={2} pb={2} alignItems="center">
        {tabViewToggle && <Grid sx={{ order: 1 }}>{tabViewToggle}</Grid>}
        <Grid sx={{ order: { xs: 4, lg: 2 } }}>
          <Tabs value={active} onChange={handleChange} variant="scrollable">
            {tabs.map((tab) => (
              <Tab
                key={tab.label}
                icon={tab.icon}
                label={tab.label}
                value={tab.index}
                iconPosition={isDesktop ? 'start' : 'top'}
                component={tab.href ? 'a' : 'div'}
                href={tab.href}
              />
            ))}
          </Tabs>
        </Grid>
        {aside && (
          <>
            <Grid sx={{ order: { xs: 2, lg: 3 } }} />
            <Grid textAlign="right" sx={{ order: { xs: 3, lg: 4 } }}>
              {aside}
            </Grid>
          </>
        )}
      </Grid>
      {tabs.map((tab) => (
        <TabPanel key={tab.label} active={active === tab.index} autoDismount={autoDismount}>
          <ErrorBoundary>{tab.content}</ErrorBoundary>
        </TabPanel>
      ))}
    </>
  );
};
