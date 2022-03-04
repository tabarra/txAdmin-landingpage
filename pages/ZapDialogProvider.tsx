import React, { createContext, useCallback, useContext, useState } from 'react';

interface ZapDialogCtxValue {
  isDialogOpen: boolean;
  setDialogOpen: (isOpen: boolean) => void;
}

const ZapDialogCtx = createContext<ZapDialogCtxValue | null>(null);

// @ts-ignore
export const useZapDialog = () => useContext<ZapDialogCtxValue>(ZapDialogCtx);

export const ZapDialogProvider: React.FC = ({ children }) => {
  const [zapDialogOpen, setZapDialogOpen] = useState(false);

  const setDialogOpen = useCallback((bool) => {
    setZapDialogOpen(bool);
  }, []);

  return (
    <ZapDialogCtx.Provider
      value={{
        isDialogOpen: zapDialogOpen,
        setDialogOpen,
      }}
    >
      {children}
    </ZapDialogCtx.Provider>
  );
};
