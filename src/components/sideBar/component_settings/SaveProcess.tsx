import React, { useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import SaveSettingsModal from '../modals/SaveSettingsModal';
import { useTranslation } from 'react-i18next';


const SaveProcess = () => {

  // Translation const
  const { t } = useTranslation();

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
  
      <div className="d-grid gap-2 mt-2">
          <Button variant="primary" onClick={handleShow}>
            {t('SaveProcess.saveCurrent')}
          </Button>
      </div>
      
      <SaveSettingsModal show={show} handleClose={handleClose}/>

    </>
  );
};
  
 export default SaveProcess;