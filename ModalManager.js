
import React from 'react';
import { useModal } from './ModalContext';

import Modal2 from './Modal2';
import Modal1 from './Modal1';


function ModalManager() {
  const { modals, modalData } = useModal();

  return (
    <div className="modal-container">
      {modals.map((modalName) => (
        <React.Fragment key={modalName}>
          {modalName === 'Modal1' && <Modal1 data={modalData[modalName]} />}
          {modalName === 'Modal2' && <Modal2 data={modalData[modalName]} />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ModalManager;
