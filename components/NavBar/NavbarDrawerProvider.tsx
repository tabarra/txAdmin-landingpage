import React, { createContext, useContext, useState } from 'react';
import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { MobileNavbar } from './MobileNavbar';

interface NavbarDrawerCtxVal {
  drawerIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navbarDrawerCtx = createContext<NavbarDrawerCtxVal | null>(null);

export const NavbarDrawerProvider: React.FC = ({ children }) => {
  const [drawerIsOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <navbarDrawerCtx.Provider
      value={{
        drawerIsOpen,
        setIsOpen,
      }}
    >
      <>
        {children}
        <Drawer isOpen={drawerIsOpen} placement='right' onClose={() => setIsOpen(false)}>
          <DrawerOverlay />
          <DrawerContent bg={theme.colors.bg.dark} p={6} color='white'>
            <DrawerCloseButton color='white' />
            <Text fontSize={'2xl'} fontWeight='600'>
              Navigation
            </Text>
            <Box mt={3}>
              <MobileNavbar />
            </Box>
          </DrawerContent>
        </Drawer>
      </>
    </navbarDrawerCtx.Provider>
  );
};

export const useNavbarDrawerCtx = () =>
  useContext<NavbarDrawerCtxVal>(navbarDrawerCtx as any);
