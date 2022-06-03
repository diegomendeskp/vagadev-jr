import React, { useState, createContext, useContext } from 'react';

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function autoToggleModal() {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 5500);
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, autoToggleModal, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export { useModalContext, ModalProvider };
