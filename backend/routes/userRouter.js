import { Router } from "express";
import { createUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter
    .post("/signUp", createUser)
    .post("/signIn", passport.authenticate('local', {
        successRedirect: "http://localhost:5173/members",
        failureRedirect: "http://localhost:5173/login",
        failureFlash: true
      }))

export default userRouter;