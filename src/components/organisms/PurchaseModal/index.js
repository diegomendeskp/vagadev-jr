import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalCard from '../../molecules/ModalCard';
import { customStyles } from './styles';

export function PurchaseModal() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function autoToggleModal() {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 55500);
  }

  return (
    <Modal
      onAfterOpen={autoToggleModal}
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={customStyles}
      contentLabel="Modal de Compra Finalizada"
    >
      <ModalCard />
    </Modal>
  );
}

export default PurchaseModal;
