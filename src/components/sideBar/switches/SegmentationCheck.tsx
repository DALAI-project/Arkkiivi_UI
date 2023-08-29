import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Form, Container, Col, Row } from 'react-bootstrap';

const SegmentationCheck : React.FC = () => {

    //Is component disabled before starting
    // Check .env file 
    const disabled_segmentation = process.env.REACT_APP_SEGMENTATION_DISABLED;
    const dis_bool_segmentation = disabled_segmentation === 'true';

    // This is for ChooseProcess
    // Checking if the localStorage values have changed and switching switches accordingly
    useEffect(() => {
        const listenStorageChange = () => {
          if (localStorage.getItem("segmentation") === 'true') {
            setSegmentation("true");
          } else {
            setSegmentation("false");
          }
        };
        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
    }, []);

    const storageSegmentation: any = JSON.parse(localStorage.getItem('segmentation') || 'false');
    const [segmentation, setSegmentation] = useState<any>(storageSegmentation);

    const changeSegmentation = useCallback((event : any) : void => {
        setSegmentation(event.target.checked);
        localStorage.setItem('segmentation', event.target.checked);
    }, []);

    return (
      <>
    
        <Accordion.Item eventKey="5" hidden={dis_bool_segmentation}>
            <Accordion.Header>
                <Container>
                    <Row>
                        <Col xs={9}>
                            Segmentointi
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeSegmentation} checked={storageSegmentation}/>
                        </Col>
                    </Row>
                </Container>
            </Accordion.Header>
        </Accordion.Item>
                    
      </>
    );
  };
  
 export default SegmentationCheck;