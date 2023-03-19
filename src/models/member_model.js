class MemberModel {
  constructor(id, familyId, name, age) {
    this.id = id || "new";
    this.familyId = familyId;
    this.name = name;
    this.age = age;
  }
}

export default MemberModel;
