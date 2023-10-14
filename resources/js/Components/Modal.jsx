import React, { Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../css/Modal.css'
export default function CustomModal({
    children,
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
        <Modal show={show} onHide={close} centered>
            <Modal.Header closeButton={closeable}>
                <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
          
        </Modal>
    );
}
