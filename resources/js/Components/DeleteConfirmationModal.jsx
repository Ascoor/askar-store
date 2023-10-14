// DeleteConfirmationModal.js
import React from 'react';

const DeleteConfirmationModal = ({ brand, onCancel, onConfirm }) => {
  return (
    <div className="delete-confirmation-modal">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete {brand.name}?</p>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={() => onConfirm(brand)}>Confirm</button>
    </div>
  );
};

export default DeleteConfirmationModal;
