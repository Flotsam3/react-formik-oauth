import {Schema, model} from "mongoose";

const userSchema = new Schema({
    googleId: { type: String, required: true, unique: true },
    name: { type: String },
    email: { type: String, unique: true },
    profileImage: { type: String }
});

const User = model("User", userSchema);

export default User;
