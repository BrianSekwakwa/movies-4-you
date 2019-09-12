import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
  state = {
    movieName: null
  };

  handleChange = e => {
    console.log(e.target.value);
  };

  handleSubmit = e => {
    console.log(e.target.value);
    e.preventDefault();
  };
  render() {
    return (
      <Navbar
        className="navigation"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">M4Y</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">UpComing</Nav.Link>
            <Nav.Link href="#features">Now-Playing</Nav.Link>
          </Nav>
          <Form onSubmit={this.handleSubmit} inline>
            <FormControl
              onChange={this.handleChange}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button className="botton-margin" variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
