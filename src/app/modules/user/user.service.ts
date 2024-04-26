import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: TUser) => {
  const isEmailExists = await User.findOne({ email: payload.email });
};
