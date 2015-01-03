var express = require('express');

module.exports = function(count) {
  var router = express.Router();
  router.get('/',function(req, res, next) { 
      req.session[req.baseUrl] = req.session[req.baseUrl] || {};
      req.session[req.baseUrl].reqCount = req.session[req.baseUrl].reqCount + 1 || 1;
      req.requestCount = req.session[req.baseUrl].reqCount;
      next();
  }, function(req, res, next) {
    if (req.session[req.baseUrl].reqCount > count) {
      res.send("Too many requests");
    } else {
      next();
    }
  });
  return router;
};