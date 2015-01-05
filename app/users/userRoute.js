var router = require('express').Router();
var users = require('./userController');

router.get('/', users.query);
router.post('/', users.post);
router.get('/:_id', users.get);
router.put('/:_id', users.put);
router['delete']('/:_id', users['delete']);
router.use('/', function(err, req, res, next) {
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