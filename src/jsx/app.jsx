import $ from 'jquery';
import React from 'react';

var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route
  , Link = Router.Link;

class ScenarioStore {

  constructor(scenarios) {
    this.scenarios = scenarios;
  }

  all() {
    return this.scenarios;
  }

  get(uuid) {
    return this.scenarios.filter(sc => sc.uuid == uuid)[0];
  }
}

const scenarios = new ScenarioStore([
  { uuid : "a1", text: "bla1" },
  { uuid : "a2", text: "bla2" },
  { uuid : "a3", text: "bla3" }
]);

class HomeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scenario : scenarios.get(props.uuid)
    };
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="login">Login</Link> | <Link to="register">Register</Link> | <Link to="scenarioList">Scenarios</Link> 
        <RouteHandler/>
      </div>
    );
  }
}

class ScenarioListView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scenarios : scenarios.all()
    };
  }

  render() {
    return (
      <div>
        <h1>Scenarios</h1>
        <ul>
        {this.state.scenarios.map((scenario) => {
            return (
              <li><Link to="scenario" params={{uuid: scenario.uuid}}>{scenario.text}</Link></li>
            )
        })}
        </ul>
      </div>
    );
  }
}

class ScenarioView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scenario: scenarios.get(this.props.params.uuid),
      edit : props.query.edit
    };
  }

  render() {
    var query = this.props.location;
    if (this.state.edit) {
      return (
        <div>
          <h1>Scenario Edit View {this.state.scenario.uuid}</h1>
          <Link to="scenario" params={{uuid: this.state.scenario.uuid}}>Save</Link>
          <Link to="scenarioList">Back</Link>
        </div>
      );
    }
    return (
      <div>
        <h1>Scenario {this.state.scenario.uuid}</h1>
        <Link to="scenario" params={{uuid: this.state.scenario.uuid}} query={{edit:true}}>Edit</Link>
        <Link to="scenarioList">Back</Link>
      </div>
    );
  }
}

class RegisterView extends React.Component {

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

class LoginView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

var routes = (
  <Route path="/" handler={HomeView}>
    <Route name="login"        path="login"           handler={LoginView}        />
    <Route name="register"     path="register"        handler={RegisterView}     />
    <Route name="scenarioList" path="scenarios"       handler={ScenarioListView} />
    <Route name="scenario"     path="scenarios/:uuid" handler={ScenarioView}     />
  </Route>
);

$(function(){
  Router.run(routes, Router.HistoryLocation, function(Root) {
    React.render(<Root/>, document.body);
  });
  window.onhashchange = () => console.log(window.location);
});
