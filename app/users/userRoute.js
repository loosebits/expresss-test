var router = require('express').Router();
var users = require('./userController');

function addAuthentication(req, res, next) {
  req.session.user = req.user;
  next();
}

function dataSender(name) {
  return function(req, res, next) {
    console.log('data sent');
    if (name) {
      res.json(req[name]);
    } else {
      res.json(null);
    }
  };
}
router.get('/authentication', function(req, res, next) {
  req.user = req.session.user;
  next();
}, dataSender('user'));
router.put('/logout', function(req, res, next) {
  console.log('logout');
  delete req.session.user;
  next();
}, dataSender());
router.get('/', users.query, dataSender('users'));
router.post('/signUp', users.create, addAuthentication, dataSender('user'));
router.put('/login', users.login, addAuthentication, dataSender('user'));
router.post('/', users.create, dataSender('user'));
router.get('/:_id', users.load, dataSender('user'));
router.put('/:_id', users.update, dataSender('user'));
router['delete']('/:_id', users['delete'], dataSender());
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