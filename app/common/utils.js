'use strict';
var _ = require('lodash-node');
module.exports = {
  validations: {
    required: function(val) {
      return val.length;
    },
    roles: {
      unique: function(roles) {
        return _.unique(roles).length === roles.length;
      },
      required: function(roles) {
        return roles.length;
      },
      valid: function(roles) {
        return _.intersection(roles, require('./constants').roles).length === roles.length;
      }
    }
  }
};