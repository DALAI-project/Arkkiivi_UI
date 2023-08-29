import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Form, Container, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const WritingTypeCheck : React.FC = () => {

  // Translation const
  const { t } = useTranslation();

    //Is component disabled before starting
    // Check .env file 
    const disabled_writingType = process.env.REACT_APP_WRITING_TYPE_DISABLED;
    const dis_bool_writingType = disabled_writingType === 'true';

    // This is for ChooseProcess
    // Checking if the localStorage values have changed and switching switches accordingly
    useEffect(() => {
        const listenStorageChange = () => {
          if (localStorage.getItem("writingType") === 'true') {
            setWritingType("true");
          } else {
            setWritingType("false");
            localStorage.setItem('writingType', 'false');
          }
        };
        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
    }, []);

    const storageWritingType: any = JSON.parse(localStorage.getItem('writingType') || 'false');
    const [writingType, setWritingType] = useState<any>(storageWritingType);

    const changeWritingType = useCallback((event : any) : void => {
        setWritingType(event.target.checked);
        localStorage.setItem('writingType', event.target.checked);
    }, []);

    return (
      <>
    
        <Accordion.Item eventKey="3" hidden={dis_bool_writingType}>
          <Container className='singleComponent'>
              <Row>
                  <Col xs={9}>
                    {t('WritingTypeCheck.writingType')}
                  </Col>
                  <Col xs={3}>
                      <Form.Check type="switch" onChange={changeWritingType} checked={storageWritingType}/>
                  </Col>
              </Row>
          </Container>
        </Accordion.Item>
                    
      </>
    );
  };
  
 export default WritingTypeCheck;