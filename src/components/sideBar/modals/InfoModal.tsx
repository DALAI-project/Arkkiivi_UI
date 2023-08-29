import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import corner from '../../../img/infoPDF/corner.pdf';
import empty from '../../../img/infoPDF/empty.pdf';
import metadata from '../../../img/infoPDF/metadata.pdf';
import postit from '../../../img/infoPDF/postit.pdf';
import writingtype from '../../../img/infoPDF/writingtype.pdf';

interface ModalSettings {
    show : boolean,
    handleClose : () => void;
}

const InfoModal = ({show, handleClose} : ModalSettings) => {

    // Translation const
    const { t } = useTranslation();

    return (
      <>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton closeVariant='white' className="modal-bg">
                <Modal.Title><h4 style={{margin : 0}}>{t('InfoModal.about')}</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-bg">
                <h6>{t('InfoModal.emptyCheck')}:</h6>
                <p>
                    {t('InfoModal.emptyCheckText')} <br/>
                    <a href={empty} target='_blank' rel="noreferrer" className='link-color2'>{t('InfoModal.readMore')}...</a>
                </p>
                <h6>{t('InfoModal.postIt')}:</h6>
                <p>
                    {t('InfoModal.postItText')}<br/>
                    <a href={postit} target='_blank' rel="noreferrer" className='link-color2'>{t('InfoModal.readMore')}...</a>
                </p>
                <h6>{t('InfoModal.bentCorner')}:</h6>
                <p>
                    {t('InfoModal.bentCornerText')}<br/>
                    <a href={corner} target='_blank' rel="noreferrer" className='link-color2'>{t('InfoModal.readMore')}...</a>
                </p>
                <h6>{t('InfoModal.metadata')}:</h6>
                <p>
                    {t('InfoModal.metadataText')}<br/>
                    <a href={metadata} target='_blank' rel="noreferrer" className='link-color2'>{t('InfoModal.readMore')}...</a>
                </p>
                <h6>{t('InfoModal.writingType')}</h6>
                <p>
                    {t('InfoModal.writingTypeText')}<br/>
                    <a href={writingtype} target='_blank' rel="noreferrer" className='link-color2'>{t('InfoModal.readMore')}...</a>
                </p>
            </Modal.Body>
            <Modal.Footer className="modal-bg">
                <Button variant="primary" onClick={handleClose} >
                    {t('InfoModal.close')}
                </Button>
            </Modal.Footer>
        </Modal>
                    
      </>
    );
  };
  
 export default InfoModal;