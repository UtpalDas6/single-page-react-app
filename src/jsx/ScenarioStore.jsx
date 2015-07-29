// fake storage layer
export default class ScenarioStore {

  constructor() {
    this.scenarios = [
      { uuid : "a1", text: "bla1" },
      { uuid : "a2", text: "bla2" },
      { uuid : "a3", text: "bla3" }
    ];
  }

  all() {
    return this.scenarios;
  }

  get(uuid) {
    return this.scenarios.filter(sc => sc.uuid == uuid)[0];
  }
}
