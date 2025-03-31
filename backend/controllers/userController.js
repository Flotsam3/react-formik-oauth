import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({msg: "User created!"}, user)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error!"});
    }
}

export const signUp = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({msg: "New user created via email!"}, user);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error!"});
    }
}

export const me = async (req, res) => {
    console.log("from me", {user:req.user});
    console.log("Session Details:", req.session);
    console.log("User from session:", req.user);
    try {
        res.status(200).json({ user: req.user });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error!"});
    }
}

export const errorAuth = async (req, res) => {
    try {
        res.status(401).json({msg: "Authentication error!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error!"});
    }
}

export const successAuth = async (req, res) => {
    try {
        res.status(200).json({msg: "Authentication successful!", user: req.user});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error!"});
    }
}

export const logout = async (req, res) => {
    try {
        req.logout((err) => {
            if (err) { 
                return next(err); 
            }
            req.session.destroy((err) => {
                if (err) {
                    return res.status(500).send("Failed to clear session");
                }
                res.clearCookie("connect.sid");  // Clear the session cookie
                res.status(200).json({ msg: "Logged out successfully" }); // Send success response
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error!"});
    }
}