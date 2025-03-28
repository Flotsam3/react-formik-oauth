import express from "express";
import connectDB from "./libs/dbConnect.js";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import "./passport.js";
import authRouter from "./routes/authRouter.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use(session({
  secret: "oauth",  // Use a secure, complex secret in production
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day
}));


app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
