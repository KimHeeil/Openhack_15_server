var knex = require('../lib/knex');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw('select * from humaninfo;')
  .then(function (result) {
    console.log(result);
    res.json(result[0]);
  })
  .catch(function (err) {
    res.json(err);
  })
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  knex.raw('select * from humaninfo where seq = ?;', [id])
  .then(function (result) {
    console.log(result);
    res.json(result[0][0]);
  })
  .catch(function (err) {
    res.json(err);
  })
});
module.exports = router;
