class SignupModel {
  constructor(id, cruiseId, familyId, type, roomNumber, minValue, maxValue) {
    this.id = id;
    this.cruiseId = cruiseId;
    this.familyId = familyId;
    this.type = type;
    this.roomNumber = roomNumber || 0;
    this.minValue = minValue || 10;
    this.maxValue = maxValue || 100;
  }
}

export default SignupModel;
