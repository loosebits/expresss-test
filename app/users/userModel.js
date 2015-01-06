'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validations = require('../common/utils').validations;

var UserSchema = new Schema({
  userId: {type: String, unique: true},
  password: {type: String },
  roles: {type: [String]}
});
var User = mongoose.model('User', UserSchema);
User.schema.path('userId').validate(validations.required,'User id is required');
User.schema.path('password').validate(validations.required, 'Password is required');
User.schema.path('roles').validate(validations.roles.unique, 'Duplicate roles');
User.schema.path('roles').validate(validations.roles.required, 'No roles specified');
User.schema.path('roles').validate(validations.roles.valid, 'One or more roles are invalid');