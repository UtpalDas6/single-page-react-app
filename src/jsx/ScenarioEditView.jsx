import React         from 'react';
import ScenarioStore from './ScenarioStore.jsx';

var Router = require('react-router')
  , Link = Router.Link;

export default class ScenarioEditView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scenario: new ScenarioStore().get(props.params.uuid)
    };
  }

  render() {
    return (
      <div>
        <h1>Scenario Edit View {this.state.scenario.uuid}</h1>
        <p><textarea>{this.state.scenario.text}</textarea></p>
        <Link to="scenarioView" params={{uuid: this.state.scenario.uuid}}>Save</Link>
        <Link to="scenarioList">Back</Link>
      </div>
    );
  }
}
