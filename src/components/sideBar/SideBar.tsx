import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';
import { Nav, Accordion, Form } from 'react-bootstrap';
import ChooseProcess from './component_settings/ChooseProcess';
import SaveProcess from './component_settings/SaveProcess';
import InfoModal from './modals/InfoModal';
import EmptyCheck from './switches/EmptyCheck';
import FlawCheck from './switches/FlawCheck';
import MetadataCheck from './switches/MetadataCheck';
import SegmentationCheck from './switches/SegmentationCheck';
import WritingTypeCheck from './switches/WritingTypeCheck';
import '../../css/main.css'
import { useTranslation } from 'react-i18next';

const SideBar : React.FC = () => {

  // Translation const
  const { t } = useTranslation();

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Switches are under switches folder

  return (
    <>
  
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky"></div>
          <div className='componentsModal' onClick={handleShow}><h5 className="mt-2">{t('SideBar.components')} <FontAwesomeIcon icon="info-circle"/></h5></div>
          <Form>
              <Accordion alwaysOpen>
                  <EmptyCheck/>
                  <FlawCheck/>
                  <MetadataCheck/>
                  <WritingTypeCheck/>
                  <SegmentationCheck/>
              </Accordion>
          </Form>
      </Nav>

      <InfoModal show={show} handleClose={handleClose}/>

      <ChooseProcess/>

      <SaveProcess/>
      
    </>
  );
};
  
 export default SideBar;