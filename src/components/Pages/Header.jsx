import React from "react";
import "./../Css/head.css";
import { FaSistrix } from "react-icons/fa";
import { Navbar, FormControl,Form} from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar className="header">
        <Navbar.Brand href="#" className="name">
          Proctor Vision
        </Navbar.Brand>
        <Form className="d-flex">
        <FaSistrix className="s"/>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <div className="side">

      <a className="mini">&nbsp;&nbsp;&nbsp;&nbsp;</a>
      <a className="box">&nbsp;</a>
      <a className="c">&#10006;</a>
      
      </div>
     

      </Navbar>
    </div>
  );
}
export default Header;
