import { Router } from "express";
import passport from "passport";
import * as user from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const authRouter = Router();

authRouter
    .get("/google", passport.authenticate("google", {scope:  ["profile", "email"]})) // Called from the client on button click
    .get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }))
    /*
    - The successRedirect works well in server-rendered apps, not SPAs.
    - In SPAs, always redirect to the root from the backend and let the frontend handle conditional navigation.
    - Therefore <Navigate to="/members" /> in Login.jsx
    */
    .get("/google/callback", passport.authenticate("google", { // Called by passport defined in callbackURL
        successRedirect: "http://localhost:5173/members", 
        failureRedirect: "http://loalhost:3000/auth/error"
    }))
    .get("/github/callback", passport.authenticate("github", { // Called by passport defined in callbackURL
        successRedirect: "http://localhost:5173/members", 
        failureRedirect: "http://loalhost:3000/auth/error"
    }))
    .get("/me", isAuthenticated, user.me)
    .get("/error", user.errorAuth)
    .get("/sucess", user.successAuth)
    .post("/logout", user.logout)

export default authRouter;