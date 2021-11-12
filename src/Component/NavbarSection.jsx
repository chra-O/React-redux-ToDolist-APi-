import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  Container,
  FormControl,
} from "react-bootstrap";
import "./navbar.css";

import { Link } from "react-router-dom";
export default function NavbarSection() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Chra React</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="linkstyle" to="/">
                Home
              </Link>
              <Link className="linkstyle" to="/ToDo">
                ToDo
              </Link>
              <Link className="linkstyle" to="/DogApi">
                {" "}
                Dog
              </Link>
              <Link className="linkstyle" to="/signUp">
                {" "}
                LogIn
              </Link>
              <Link className="linkstyle" to="/Information">
                {" "}
                Information
              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  );
}
