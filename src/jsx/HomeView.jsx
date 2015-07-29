import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavItemLink, ButtonLink, ListGroupItemLink } from 'react-router-bootstrap';

var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Link = Router.Link;

export default class HomeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Navbar brand={<Link to="home">Home</Link>}>
          <Nav>
            <NavItemLink to="login">Login</NavItemLink>
            <NavItemLink to="register">Register</NavItemLink>
            <NavItemLink to="scenarioList">Scenarios</NavItemLink>
          </Nav>
        </Navbar>
        <RouteHandler/>
      </div>
    );
  }
}
