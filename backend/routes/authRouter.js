import { Router } from "express";
import passport from "passport";

const authRouter = Router();

authRouter
    .get("/google", passport.authenticate("google", {scope:  ["profile"]}))
    .get("/google/callback", passport.authenticate("google", {
        successRedirect: "http://localhost:5173", 
        failureRedirect: "http://loalhost:3000/auth/error"
    }))
    .get("/error", (req, res) => {
        res.status(401).json({msg: "Google authentication error!"})
    })
    .get("/sucess", (req, res) => {
        res.status(200).json({msg: "Authenticated with Google!", user: req.user})
    })
    .post("/logout", (req, res) => {
        req.logout((err) => {
            if (err) { return next(err); }
            req.session.destroy((err) => {
                if (err) {
                    return res.status(500).send("Failed to clear session");
                }
                res.clearCookie("connect.sid");  // Remove the session cookie
                res.redirect("http://localhost:5173");
            });
        });
    })

export default authRouter;