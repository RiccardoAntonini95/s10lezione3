import React from "react";
import logo from "../assets/logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class MyNavBar extends React.Component{
  render(){
    return(
      <Nav
      className="navbar navbar-expand-lg navbar-dark"
    >
      <Navbar.Brand href="#">
        <img src={logo} id="netflix-logo" />
      </Navbar.Brand>
      <Button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
    
      <Navbar.Collapse id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="fw-bold nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="fw-bold nav-link" to="/TvShows">
              TV Shows
            </Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="fw-bold" href="#">
              Movies
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="fw-bold" href="#">
              Recently Added
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="fw-bold" href="#">
              My List
            </Nav.Link>
          </li>
        </ul>
        <i className="fa fa-search icons"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons"></i>
        <i className="fa fa-user icons"></i>
      </Navbar.Collapse>
    </Nav>
    )
  }
}


export default MyNavBar