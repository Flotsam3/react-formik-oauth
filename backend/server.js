import express from "express";
import connectDB from "./libs/dbConnect.js";
import session from "express-session";
import passport from "./auth/index.js";
import cors from "cors";
import "./auth/passportGoogle.js";
import authRouter from "./routes/authRouter.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors({credentials:true, origin:"http://localhost:5173"}));

app.use(session({
  secret: "oauth",  // Use a secure, complex secret in production
  resave: false,
  saveUninitialized: true,
  cookie: {  
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    httpOnly: true,       // Recommended for security
    secure: false,        // Set to true if using HTTPS
    sameSite: "lax",      // Ensures cookies are sent with cross-site requests } 
}}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
