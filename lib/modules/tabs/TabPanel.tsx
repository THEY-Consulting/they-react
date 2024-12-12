import React from 'react';

type Props = {
  children?: React.ReactNode;
  active: boolean;
  autoDismount?: boolean;
};

export const TabPanel: React.FC<Props> = ({ children, active, autoDismount, ...other }) => {
  return (
    <div role="tabpanel" hidden={!active} {...other}>
      {(active || !autoDismount) && children}
    </div>
  );
};
