import React from 'react';

var Router = require('react-router')
  , Link = Router.Link;

export default class RegisterView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
