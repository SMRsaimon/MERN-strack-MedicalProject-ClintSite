import React from 'react';
import EmmergencyContract from './EmmergencyContarct/EmmergencyContract';
import "./Navigation.css"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

import logoImg from "../../../images/logo.png"
import {
  Link
} from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <EmmergencyContract />
      <Navbar className="container pt-0 mt-0" collapseOnSelect expand="lg" >
        <Navbar.Brand >
          <img className="img-fluid img-logo" src={logoImg} alt="" srcset="" />
          &nbsp; &nbsp;
          <h4 className=" brand-name text-uppercase">Saimon HelthCare</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="ml-2" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/DeshBoard" >DeshBoard</Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/Doctors" >Doctors</Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/Appoinment" >Appoinment</Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/Gallery" >Gallery</Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/contract" >Contract</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;