'use strict';
var constants = require('../common/constants');
module.exports = {
  authenticated: function(req, res, next) {
    if (!req.session.user) {
      res.send(401);
    } else {
      next();
    }
  },
  requiresRole: function(role) {
    return function(req, res, next) {
      if(req.session.user.roles.indexOf(role) < 0) {
        res.send(403);
      } else {
        next();
      }
    };
  },
  logout: function(req, res, next) {
    delete req.session.user;
    next();
  },
  addAuthentication: function(req, res, next) {
    req.session.user = req.user;
    next();
  },
  setDefaultRole: function(req, res, next) {
    //Replace any submitted rules
    req.body.roles = [constants.role.user];
    next();
  }
};