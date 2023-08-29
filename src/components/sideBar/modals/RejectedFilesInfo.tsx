import React, { useCallback, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface ModalSettings {
    show : boolean,
    handleClose : () => void;
}

const RejectedFilesInfo = ({show, handleClose} : ModalSettings) => {

    // Translation const
    const { t } = useTranslation();

    return (
      <>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton closeVariant='white' className="modal-bg">
                <Modal.Title>{t('RejectedFilesInfo.fileTypes')}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-bg">
                <p>jpeg, jpg, png, tif, tiff, pdf, txt, xml</p>
            </Modal.Body>
            <Modal.Footer className="modal-bg">
                <Button variant="primary" onClick={handleClose}>
                    {t('RejectedFilesInfo.close')}
                </Button>
            </Modal.Footer>
        </Modal>
                    
      </>
    );
  };
  
 export default RejectedFilesInfo;