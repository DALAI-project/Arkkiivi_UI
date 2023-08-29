import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Form, Container, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const EmptyCheck : React.FC = () => {

    // Translation const
    const { t } = useTranslation();

    //Is component disabled before starting
    // Check .env file 
    const disabled = process.env.REACT_APP_EMPTY_DISABLED;
    const dis_bool = disabled === 'true';

    // This is for ChooseProcess
    // Checking if the localStorage values have changed and switching switches accordingly
    useEffect(() => {
        const listenStorageChange = () => {
          if (localStorage.getItem("empty") === 'true') {
            setEmpty("true");
          } else {
            setEmpty("false");
            localStorage.setItem('empty', 'false');
          }
        };
        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
    }, []);

    const storageEmpty: any = JSON.parse(localStorage.getItem('empty') || 'false');
    const [,setEmpty] = useState<any>(storageEmpty);

    const changeEmpty = useCallback((event : any) : void => {
        setEmpty(event.target.checked);
        localStorage.setItem('empty', event.target.checked);
        window.dispatchEvent(new Event("storage"));
    }, []);

    return (
      <>
    
        <Accordion.Item eventKey="0" hidden={dis_bool}>
          <Container className='singleComponent'>
              <Row>
                  <Col xs={9}>
                    {t('EmptyCheck.empty')}
                  </Col>
                  <Col xs={3}>
                      <Form.Check type="switch" onChange={changeEmpty} checked={storageEmpty}/>
                  </Col>
              </Row>
          </Container>
        </Accordion.Item>
                    
      </>
    );
  };
  
 export default EmptyCheck;