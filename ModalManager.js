
import React from 'react';
import { useModal } from './ModalContext';

import Modal2 from './Modal2';
import Modal1 from './Modal1';


const modalComponents = {
    Modal1: Modal1,
    Modal2: Modal2,

};


function ModalManager() {
    const { modals, modalData } = useModal();

    return (
        <div className="modal-container">
            {modals.map((modalName) => {
                const ModalComponent = modalComponents[modalName];
                if (!ModalComponent) {
                    return null;
                }
                return (
                    <React.Fragment key={modalName}>
                    <ModalComponent key={modalName} data={modalData[modalName]} />
                    </React.Fragment>
                )
            })}
        </div>
    );
}

export default ModalManager;
