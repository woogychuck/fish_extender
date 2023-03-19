class UserModel {
  constructor(id, username, email, members, signups, cruises, groups) {
    this.id = id || "new";
    this.username = username;
    this.email = email;
    this.members = members || [];
    this.signups = signups || [];
    this.cruises = cruises || [];
    this.groups = groups || [];
  }
}

export default UserModel;
