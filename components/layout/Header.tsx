import React from 'react';
import { GettingStartedDialog } from '../misc/GettingStartedDialog';
import { MainNavBar } from '../NavBar/MainNavBar';

const Header: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div>
      <GettingStartedDialog />
      <MainNavBar />
      <div className={className}>{children && children}</div>
    </div>
  );
};

export default Header;
