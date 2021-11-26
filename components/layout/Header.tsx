import React, { useState } from 'react';
import { MobileNavBar, DesktopNavBar } from './NavBar';
import { GettingStartedDialog } from '../misc/GettingStartedDialog';

const Header: React.FC = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <GettingStartedDialog />
      <MobileNavBar isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <DesktopNavBar handleOpenMobile={() => setMobileNavOpen(true)} />
      <div className='flex h-screen items-center justify-center'>
        {children && children}
      </div>
    </div>
  );
};

export default Header;
