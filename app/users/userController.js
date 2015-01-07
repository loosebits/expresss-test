'use strict';
var mongoose = require('mongoose');
var _ = require('lodash-node');
require('./userModel');
var User = mongoose.model('User');

exports.roles = function(req, res, next) {
  req.roles = require('../constants').roles;
};

exports.load = function(req, res, next) {
  User.findById(req.params._id, function(err, user) {
    if (err) return next(err);
    req.user = user;
    next();
  });
};

exports.login = function(req, res, next) {
  User.findOne({userId: req.body.userId, password: req.body.password}, function(err, user) {
    if (err) return next(err);
    req.user = user;
    next();
  });
};

exports.query = function(req, res, next) {
  var q = _.extend({}, req.query);
  console.log(q);
  User.find(q, function(err, users) {
    if (err) return next(err);
    req.users = users;
    console.log(users);
    next();
  });
};

exports.update = function(req, res, next) {
  User.findById(req.params._id, function(err, user) {
      _.extend(user, req.body).save(function(err, user) {
      if (err) return next(err);
      req.user = user;
      next();
    });
  });
};

exports.create = function(req, res, next) {
  new User(req.body).save(function(err, user) {
    if (err) return next(err);
    req.user = user;
    next();
  });
};

exports.delete = function(req, res, next) {
  User.remove({_id: req.params._id}, function(err) {
    if (err) return next(err);
    next();
  });
};