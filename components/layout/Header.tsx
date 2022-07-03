import React, { useState } from 'react';
import NavBar from './NavBar';
import { GettingStartedDialog } from '../misc/GettingStartedDialog';

const Header: React.FC = ({ children }) => {
  return (
    <div>
      <GettingStartedDialog />
      <NavBar />
      <div className='flex h-screen items-center justify-center'>
        {children && children}
      </div>
    </div>
  );
};

export default Header;
