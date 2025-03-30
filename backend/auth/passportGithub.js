import { Strategy as GitHubStrategy } from 'passport-github2';
import passport from 'passport';
import { createUserFromGithub } from '../controllers/userController.js';

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback",
  },
  async (accessToken, refreshToken, profile, done) => {
    const { user, error } = await createUserFromGithub(profile);
    if (error) return done(error, null);
    return done(null, user);
  }
));
