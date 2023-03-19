import UserModel from "../models/user_model";
import MemberModel from "../models/member_model";

const UserClient = {
  getCurrentUser: () => {
    const members = [];
    members.push(new MemberModel(1, 123, "Kelley", 42));
    members.push(new MemberModel(2, 123, "Ian", 41));
    members.push(new MemberModel(3, 123, "Mannix", 17));
    members.push(new MemberModel(4, 123, "Davan", 10));
    return new UserModel(123, "woogychuck", "woogychuck@gmail.com", members);
  },
};

export default UserClient;
