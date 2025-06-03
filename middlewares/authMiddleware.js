function requireLogin(req, res, next) {
    if (!req.session.user) {
      return res.redirect('/login.html');
    }
    next();
  }
  
  module.exports = requireLogin;
  