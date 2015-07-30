import $ from 'jquery';
import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { NavItemLink, ButtonLink, ListGroupItemLink } from 'react-router-bootstrap';

var Router = require('react-router')
  , Route = Router.Route
  , RouteHandler = Router.RouteHandler
  , Link = Router.Link;

import Scaffold from './Scaffold.jsx';
import HomeView from './HomeView.jsx';
import ScenarioListView from './ScenarioListView.jsx';
import ScenarioEditView from './ScenarioEditView.jsx';
import ScenarioView from './ScenarioView.jsx';
import RegisterView from './RegisterView.jsx';
import LoginView from './LoginView.jsx';

var routes = (
  <Route handler={Scaffold}>
    <Route name="home"         path="/"                    handler={HomeView}         />
    <Route name="login"        path="login"                handler={LoginView}        />
    <Route name="register"     path="register"             handler={RegisterView}     />
    <Route name="scenarioList" path="scenarios"            handler={ScenarioListView} />
    <Route name="scenarioView" path="scenarios/:uuid"      handler={ScenarioView}     />
    <Route name="scenarioEdit" path="scenarios/:uuid/edit" handler={ScenarioEditView} />
  </Route>
);

$(function(){
  Router.run(routes, Router.HistoryLocation, function(Root) {
    React.render(<Root />, document.body);
  });
});
