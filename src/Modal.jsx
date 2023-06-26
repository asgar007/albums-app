import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;

const ModalForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

const ModalButton = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Modal = ({ isOpen, onClose, onUpdate }) => {
  const [updatedTitle, setUpdatedTitle] = useState('');

  const handleInputChange = (event) => {
    setUpdatedTitle(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    onUpdate(updatedTitle);
    setUpdatedTitle('');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalForm>
          <h2>Update Album</h2>
          <ModalInput
            type="text"
            value={updatedTitle}
            onChange={handleInputChange}
            placeholder="Enter updated title"
          />
          <ModalButton onClick={handleUpdate}>Update</ModalButton>
        </ModalForm>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
