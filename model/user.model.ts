import { ObjectId } from "mongoDB";
import db from "../db/config.ts";

interface UserSchema {
  _id: ObjectId;
  fullName: string;
  email: string;
  comment: string;
}

const usersModel = db.collection<UserSchema>("Users");

export default usersModel;
