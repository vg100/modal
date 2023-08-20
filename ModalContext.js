// ModalContext.js
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modals, setModals] = useState([]);
  const [modalData, setModalData] = useState({});

  const showModal = (modalName, data) => {
    if (!modals.includes(modalName)) {
      setModals([...modals, modalName]);
    }
    setModalData({ ...modalData, [modalName]: data });
  };

  const hideModal = (modalName) => {
    setModals(modals.filter(name => name !== modalName));
    const newData = { ...modalData };
    delete newData[modalName];
    setModalData(newData);
  };

  return (
    <ModalContext.Provider value={{ modals, showModal, hideModal, modalData }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
