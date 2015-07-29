import React         from 'react';
import ScenarioStore from './ScenarioStore.jsx';

var Router = require('react-router')
  , Link = Router.Link;

export default class ScenarioView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { scenario : new ScenarioStore().get(props.params.uuid) };
  }

  render() {
    return (
      <div>
        <h1>Scenario {this.state.scenario.uuid}</h1>
        <p>{this.state.scenario.text}</p>
        <Link to="scenarioEdit" params={{uuid: this.state.scenario.uuid}}>Edit</Link>
        <Link to="scenarioList">Back</Link>
      </div>
    );
  }
}
