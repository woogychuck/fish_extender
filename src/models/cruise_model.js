class CruiseModel {
  constructor(name, startDate, endDate, ship, departurePort) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.ship = ship;
    this.groups = [];
    this.signups = [];
    this.departurePort = departurePort;
  }

  calcGroups() {}
}

export default CruiseModel;
