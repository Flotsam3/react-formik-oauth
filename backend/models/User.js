import {Schema, model} from "mongoose";

const userSchema = new Schema({
    googleId: { type: String, unique: true },
    githubId: { type: String, unique: true },
    name: { type: String },
    email: { type: String, unique: true },
    profileImage: { type: String }
});

const User = model("User", userSchema);

export default User;
