import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Form, Container, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const FlawCheck : React.FC = () => {

    // Translation const
    const { t } = useTranslation();

    // Is component disabled before starting
    // Check .env file 
    const disabled_flaw = process.env.REACT_APP_FLAW_DISABLED;
    const dis_bool_flaw = disabled_flaw === 'true';

    const disabled_stripe = process.env.REACT_APP_STRIPE_DISABLED;
    const dis_bool_stripe = disabled_stripe === 'true';

    const disabled_postit = process.env.REACT_APP_POSTIT_DISABLED;
    const dis_bool_postit = disabled_postit === 'true';

    const disabled_corner = process.env.REACT_APP_CORNER_DISABLED;
    const dis_bool_corner = disabled_corner === 'true';

    // This is for ChooseProcess
    // Checking if the localStorage values have changed and switching switches accordingly
    useEffect(() => {
        const listenStorageChange = () => {
         
          if(localStorage.getItem("postIt") === 'true'){
            setFlaw("true");
            setPostIt("true");
            localStorage.setItem('flaw', "true");
          } else {
            setPostIt("false");
            localStorage.setItem('postIt', 'false');
          }
          if(localStorage.getItem("corner") === 'true'){
            setFlaw("true");
            setCorner("true");
            localStorage.setItem('flaw', "true");
          } else {
            setCorner("false");
            localStorage.setItem('postIt', 'false');
          }
          if(localStorage.getItem("stripe") === 'true'){
            setFlaw("true");
            setStripe("true");
            localStorage.setItem('flaw', "true");
          } else {
            setStripe("false");
            localStorage.setItem('postIt', 'false');
          }
          
        };
        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
    }, []);

    // All flaw checks
    const storageFlaw: any = JSON.parse(localStorage.getItem('flaw') || "false");
    const [flaw, setFlaw] = useState<any>(storageFlaw);

    const changeFlaw = useCallback((event : any) : void => {
        setFlaw(event.target.checked);
        setPostIt(event.target.checked);
        setStripe(event.target.checked);
        setCorner(event.target.checked);
        localStorage.setItem('flaw', event.target.checked);
        localStorage.setItem('postIt', event.target.checked);
        localStorage.setItem('stripe', event.target.checked);
        localStorage.setItem('corner', event.target.checked);
    }, []);

    // Post-it check
    const storagePostIt: any = JSON.parse(localStorage.getItem('postIt') || 'false');
    const [postIt, setPostIt] = useState<any>(storagePostIt);

    const changePostIt = useCallback((event : any) : void => {
        setPostIt(event.target.checked);
        localStorage.setItem('postIt', event.target.checked);
        if(event.target.checked === true){
            setFlaw("true");
            localStorage.setItem('flaw', event.target.checked);
        }
        if (localStorage.getItem("postIt") !== 'true' && localStorage.getItem("corner") !== 'true' /*&& localStorage.getItem("stripe") !== 'true'*/) {
            setFlaw("false");
            localStorage.setItem('flaw', 'false');
        }
    }, []);

    // Stripe check
    const storageStripe: any = JSON.parse(localStorage.getItem('stripe') || 'false');
    const [stripe, setStripe] = useState<any>(storageStripe);

    const changeStripe = useCallback((event : any) : void => {
        setStripe(event.target.checked);
        localStorage.setItem('stripe', event.target.checked);
        if(event.target.checked === true){
            setFlaw("true");
            localStorage.setItem('flaw', event.target.checked);
        }
        if (localStorage.getItem("postIt") !== 'true' && localStorage.getItem("corner") !== 'true' /*&& localStorage.getItem("stripe") !== 'true'*/) {
            setFlaw("false");
            localStorage.setItem('flaw', 'false');
        }
    }, []);

    // Corner check
    const storageCorner: any = JSON.parse(localStorage.getItem('corner') || 'false');
    const [corner, setCorner] = useState<any>(storageCorner);

    const changeCorner = useCallback((event : any) : void => {
        setCorner(event.target.checked);
        localStorage.setItem('corner', event.target.checked);
        if(event.target.checked === true){
            setFlaw("true");
            localStorage.setItem('flaw', event.target.checked);
        }
        if (localStorage.getItem("postIt") !== 'true' && localStorage.getItem("corner") !== 'true' /*&& localStorage.getItem("stripe") !== 'true'*/) {
            setFlaw("false");
            localStorage.setItem('flaw', 'false');
        }
    }, []);

    return (
      <>
    
        <Accordion.Item eventKey="1" hidden={dis_bool_flaw}>
            <Accordion.Header>
                <Container>
                    <Row>
                        <Col xs={9}>
                            {t('FlawCheck.flaw')}
                        </Col>
                        <Col xs={3}>
                            <Form.Check type="switch" onChange={changeFlaw} checked={storageFlaw}/>
                        </Col>
                    </Row>
                </Container>
            </Accordion.Header>
            <Accordion.Body>
            <Container>
                <Row hidden={dis_bool_stripe}>
                    <Col xs={9}>
                        Raita
                    </Col>
                    <Col xs={3}>
                        <Form.Check type="switch" onChange={changeStripe} checked={storageStripe}/>
                    </Col>
                </Row>
                <Row hidden={dis_bool_postit}>
                    <Col xs={9}>
                        {t('FlawCheck.postIt')}
                    </Col>
                    <Col xs={3}>
                        <Form.Check type="switch" onChange={changePostIt} checked={storagePostIt}/>
                    </Col>
                </Row>
                <Row hidden={dis_bool_corner}>
                    <Col xs={9}>
                        {t('FlawCheck.corner')}
                    </Col>
                    <Col xs={3}>
                        <Form.Check type="switch" onChange={changeCorner} checked={storageCorner}/>
                    </Col>
                </Row>
            </Container>
            </Accordion.Body>
        </Accordion.Item>
                    
      </>
    );
  };
  
 export default FlawCheck;