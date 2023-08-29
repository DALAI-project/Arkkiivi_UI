import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProcessControlModal from '../sideBar/modals/ProcessControlModal';

const NavBar : React.FC = () => {

    const { t } = useTranslation();

    // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                
                    Arkkiivi 
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example" className="justify-content-end">
                    <Nav>
                        <NavDropdown 
                        id="nav-dropdown-dark-example"
                        title={<FontAwesomeIcon icon="gear" />}
                        menuVariant="dark"
                        >
                            <NavDropdown.Item
                                key={"processes"}
                                onClick={() => handleShow()}
                            >
                                {t('NavBar.processControl')}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                        id="nav-dropdown-dark-example"
                        title={t('NavBar.changeLanguage')}
                        menuVariant="dark"
                        >
                        <NavDropdown.Item 
                            key={'fi'} 
                            type="submit" 
                            onClick={() => i18n.changeLanguage('fi')}
                        >
                            Suomeksi
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                            key={'en'} 
                            type="submit" 
                            onClick={() => i18n.changeLanguage('en')}
                        >
                            In english
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                            key={'sv'} 
                            type="submit" 
                            onClick={() => i18n.changeLanguage('sv')}
                        >
                            På svenska
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>

      <ProcessControlModal show={show} handleClose={handleClose}/>
      </>
    );
  };
  
  export default NavBar;