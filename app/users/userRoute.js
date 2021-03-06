'use strict';
var router = require('express').Router();
var users = require('./userController');
var auth = require('./authentication');
var role = require('../common/constants').role;

function dataSender(name) {
  return function(req, res, next) {
    console.log('data sent');
    if (name) {
      res.json(req[name] || {});
    } else {
      res.json({});
    }
  };
}
router.get('/authentication', function(req, res, next) {
  req.user = req.session.user;
  next();
}, dataSender('user'));
router.put('/logout', auth.logout, dataSender());
router.get('/', auth.authenticated, auth.requiresRole(role.admin), users.query, dataSender('users'));
router.post('/signUp', auth.setDefaultRole, users.create, auth.addAuthentication, dataSender('user'));
router.put('/login', users.login, auth.addAuthentication, dataSender('user'));
router.post('/', auth.authenticated, auth.requiresRole(role.admin), users.create, dataSender('user'));
router.get('/:_id', auth.authenticated, auth.requiresRole(role.admin), users.load, dataSender('user'));
router.put('/:_id', auth.authenticated, auth.requiresRole(role.admin), users.update, dataSender('user'));
router['delete']('/:_id', auth.authenticated, auth.requiresRole(role.admin), users['delete'], dataSender());
router.use('*', function(err, req, res, next) {
  console.log(err);
  if (err.code == 11000) {
    res.status(409);
    res.json({error: 'duplicate', message:'User already exists'});
  } else if (err.name == 'ValidationError') {
    res.status(400);
    res.json(err);
  } else {
    next(err);
  }
});
module.exports = router;