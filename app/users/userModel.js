'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validations = require('../utils').validations;

var UserSchema = new Schema({
  userId: {type: String, unique: true},
  password: {type: String }
});
var User = mongoose.model('User', UserSchema);
User.schema.path('userId').validate(validations.required,'User id is required');
User.schema.path('password').validate(validations.required, 'Password is required');