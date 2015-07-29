import React         from 'react';
import ScenarioStore from './ScenarioStore.jsx';

var Router = require('react-router')
  , Link = Router.Link;

export default class ScenarioListView extends React.Component {

  constructor(props) {
    super(props);
    this.store = new ScenarioStore();
    this.state = {
      scenarios : this.store.all()
    };
  }

  render() {
    return (
      <div>
        <h1>Scenarios</h1>
        <ul>
        {this.state.scenarios.map((scenario) => {
            return (
              <li><Link to="scenarioView" params={{uuid: scenario.uuid}}>{scenario.text}</Link></li>
            )
        })}
        </ul>
      </div>
    );
  }
}
