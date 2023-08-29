import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row, } from 'react-bootstrap';
import KA from '../../img/logos/KA_RA_logo__keskitetty.png';
import elka from '../../img/logos/ELKA_FI_PMS-1.png';
import xamk from '../../img/logos/xamk_logo_laaja2_kehys_rgb.png';
import disec from '../../img/logos/Disec_logo.jpg';
import mikkeli from '../../img/logos/Mikkeli_Terva_logo_72dpi_WEB.png';
import { useTranslation } from 'react-i18next';

const Footer : React.FC = () => {

  // Translation const
  const { t } = useTranslation();

    return (
      <>
        <Card className="text-center mt-5 footer" bg='dark' text="light">
          <Card.Body>
              <Row>
                  <Col xs={2}>
                      
                  </Col>
                  <Col xs={8}>
                      <a href="https://arkkiivi.fi/" style={{marginRight: "0.5rem"}} className='link-color' target='blank'>{t('Footer.homePage')}</a>
                      <br/>
                      <a href="https://arkkiivi.fi/?page_id=1046" style={{marginRight: "0.5rem"}} className='link-color' target='blank'>{t('Footer.infoAboutComponents')}</a>
                      <br/>
                      <a href="https://arkkiivi.fi/?page_id=713" className='link-color' target='blank'>{t('Footer.infoAboutProject')}</a>
                      <br/>
                      <a href="https://arkkiivi.fi/?page_id=2980" className='link-color' target='blank'>{t('Footer.FAQ')}</a>
                      <br/>
                      <a href="https://github.com/" className='link-color' target='blank'>{t('Footer.gitHub')}</a>

                  </Col>
                  <Col xs={2}>
                      
                  </Col>
              </Row>
              <Row>

              </Row>
          </Card.Body>
          <Card.Footer className="text-muted">{new Date().getFullYear()}</Card.Footer>
        
          
        
        </Card>

        <Card className="text-center" bg='light' text="dark">
          <Card.Body>
              <Row>
                  <Col xs={2}>
                  </Col>
                  <Col xs={8}>
                  <img src={mikkeli} alt="Mikkeli" className='footer-logo'></img>
                  <img src={KA} alt="Kansallisarkisto" className='footer-logo'></img>
                  <img src={xamk} alt="Xamk" className='footer-logo'></img>
                  <img src={elka} alt="Elka" className='footer-logo'></img>
                  <img src={disec} alt="Disec" className='footer-logo'></img>
                  </Col>
                  <Col xs={2}>
                  </Col>
                  
              </Row>
          </Card.Body>
        </Card>
          
      </>
    );
  };
  
  export default Footer;