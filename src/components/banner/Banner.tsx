import React, { useState } from 'react';
import banneri from '../../img/images/banneri5.jpg';
import { Button, Image } from 'react-bootstrap';
import InfoModal from '../sideBar/modals/InfoModal';
import { useTranslation } from 'react-i18next';
import eu from '../../img/logos/eu_lippu.png';
import vipu from '../../img/logos/vipuvoimaa.png';

const Banner : React.FC = () => {

  const { t } = useTranslation();

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='img-wrapper'>
        <div className='img-responsive'>
            <Image src={banneri} alt="banneri kuva" fluid className='banner-image'/>
            &nbsp;
            <img src={eu} alt="eu-lippu" className='eu-logo-navbar img-overlay'></img>
            <img src={vipu} alt="eu-lippu" className='vipu-logo-navbar img-overlay2'></img>
          
        </div>
      </div>

      <InfoModal show={show} handleClose={handleClose}/>
    </>
  );
};
  
export default Banner;