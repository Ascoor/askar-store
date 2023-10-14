import React, { Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../css/Modal.css'
export default function CustomModal({
    children,
    states,
    show = false,
    maxWidth = '2xl',
    closeable = true,
    onClose = () => {},
}) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    return (
        <Modal  show={show} onHide={close} centered>
            <Modal.Header className="modal-header-brand" closeButton={closeable}>
                <Modal.Title>{states}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
          
        </Modal>
    );
}
