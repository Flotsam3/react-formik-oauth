import { Router } from "express";
import { createUser } from "../controllers/userController.js";
import passport from "passport";

const userRouter = Router();

userRouter
    .post("/sign-up", createUser)
    .post("/sign-in", passport.authenticate('local', {
        successRedirect: "http://localhost:3000/auth/me",
        failureRedirect: "http://loalhost:3000/auth/error",
      }))

export default userRouter;