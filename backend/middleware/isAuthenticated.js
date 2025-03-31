export const isAuthenticated = (req, res, next) => {
    /*
    req.isAuthenticated() is added by passport when initialized with 
    session. It checks if req.user is set from the active session
    */
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next(); 
    }
  
    return res.status(401).json({ msg: "Not authenticated" });
  };