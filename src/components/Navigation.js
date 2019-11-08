import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchMovie } from "../store/actions/searchMovieAction";
import { loading } from "../store/actions/loadingAction";

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
    this.props.searchMovie(this.state.movieName);
  };

  handleSubmit = e => {
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
        <Link to="/" id="logo">
          <Navbar.Brand href="#home">M4Y</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" id="home">
              <span>Home</span>
            </Link>
          </Nav>
          <Form onSubmit={this.handleSubmit} inline>
            <FormControl
              onChange={this.handleChange}
              type="text"
              placeholder="search eg. avengers"
              className="mr-sm-2 top-margin"
            />
            <Link to="/SearchMovie">
              <Button
                onClick={this.handleClick}
                className="navagation__form-button top-margin"
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
      dispatch(loading());
      setTimeout(() => {
        dispatch(searchMovie(movieName));
      }, 1000);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
