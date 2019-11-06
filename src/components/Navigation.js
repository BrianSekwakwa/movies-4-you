import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchMovie } from "../store/actions/searchMovieAction";

class Navigation extends Component {
  state = {
    movieName: null
  };

  handleChange = e => {
    this.setState({
      movieName: e.target.value
    });
  };

  handleClick = e => {
    console.log(this.state.movieName);
    this.props.searchMovie(this.state.movieName);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    console.log(this.props);
    return (
      <Navbar
        className="navigation"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Link to="/">
          <Navbar.Brand href="#home">M4Y</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">UpComing</Nav.Link>
            <Nav.Link href="#features">Now-Playing</Nav.Link> */}
          </Nav>
          <Form onSubmit={this.handleSubmit} inline>
            <FormControl
              onChange={this.handleChange}
              type="text"
              placeholder="Search"
              className="mr-sm-2 top-margin"
            />
            <Link to="/SearchMovie">
              <Button
                onClick={this.handleClick}
                className="top-margin"
                variant="outline-info"
              >
                Search
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchMovie: movieName => {
      dispatch(searchMovie(movieName));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
