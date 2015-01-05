var mongoose = require('mongoose');
var _ = require('lodash-node');
require('./userModel');
var User = mongoose.model('User');

exports.get = function(req, res, next) {
  User.findById(req.params._id, function(err, user) {
    if (err) return next(err);
    res.json(user || {});
  });
};

exports.query = function(req, res, next) {
  User.find(function(err, users) {
    if (err) return next(err);
    res.json(users);
  });
};

exports.put = function(req, res, next) {
  User.findById(req.params._id, function(err, user) {
      _.extend(user, req.body).save(function(err, user) {
      if (err) return next(err);
      res.json(user);
    });
  });
};

exports.post = function(req, res, next) {
  new User(req.body).save(function(err, user) {
    if (err) next(err);
    res.json(user);
  });
};

exports.delete = function(req, res, next) {
  User.remove({_id: req.params._id}, function(err) {
    if (err) return next(err);
    res.json({});
  });
};