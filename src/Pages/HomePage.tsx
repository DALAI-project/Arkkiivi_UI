import Uploader from "../components/upload/Uploader";
import React from 'react';
import NavBar from "../components/navBar/NavBar";
import SideBar from "../components/sideBar/SideBar";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";

const HomePage : React.FC = () => {

    return (
      <>
        <NavBar/>
        <Banner/>
        <Container className="pageContainer">
          <Row>
            <Col xs={3} id="sidebar-wrapper">      
              <SideBar />
            </Col>
            <Col  xs={9} id="page-content-wrapper">
              <Uploader/>
            </Col> 
          </Row>
        </Container>
        <Footer/>
      </>
    );
  };
  
  export default HomePage;