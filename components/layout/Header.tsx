import { ArrowRightIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import CountUp, { CountUpProps } from 'react-countup';
import { MobileNavBar, DesktopNavBar } from './NavBar';
import { GettingStartedDialog } from '../misc/GettingStartedDialog';

const Header: React.FC = ({ children }) => {
  const [zapDialogOpen, setZapDialogOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <GettingStartedDialog
        handleDialogClose={() => setZapDialogOpen(false)}
        isDialogOpen={zapDialogOpen}
      />
      <MobileNavBar isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <DesktopNavBar handleOpenMobile={() => setMobileNavOpen(true)} />
      <div className='flex h-screen items-center justify-center'>
        {children && children}
      </div>
    </div>
  );
};

export default Header;
