module.exports = {
  authenticated: function(req, res, next) {
    if (!req.session.user) {
      res.send(401);
    } else {
      next();
    }
  },
  logout: function(req, res, next) {
    delete req.session.user;
    next();
  },
  addAuthentication: function(req, res, next) {
    req.session.user = req.user;
    next();
  }
};