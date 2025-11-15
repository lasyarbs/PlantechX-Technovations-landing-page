import React, { createContext, useContext, useState } from 'react';

interface DemoModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export const useDemoModal = () => {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error('useDemoModal must be used within a DemoModalProvider');
  }
  return context;
};

export const DemoModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DemoModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </DemoModalContext.Provider>
  );
};