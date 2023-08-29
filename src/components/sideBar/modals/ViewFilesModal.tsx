import React, { useCallback, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PdfDisplay from '../../reactPdf/PdfDisplay';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

interface ModalSettings {
    show : boolean,
    handleClose : () => void;
    file : any
}

const ViewFilesModal = ({show, handleClose, file} : ModalSettings) => {

    // Translation const
    const { t } = useTranslation();

    return (
      <>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{t('ViewFilesModal.inspectFile')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {file.filetype.includes('pdf') &&
                    <PdfDisplay file={`data:application/pdf;base64,${file.pdfString}`} />
                }
                {file.filetype.includes('image') &&
                    <TransformWrapper>
                        <TransformComponent>
                            <img alt={`${file.fileName}`} src={`${file.src}`} className="preview-img"/>
                        </TransformComponent>
                    </TransformWrapper>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Sulje
                </Button>
            </Modal.Footer>
        </Modal>
                    
      </>
    );
  };
  
 export default ViewFilesModal;