var knex = require('../lib/knex');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    var result = await knex.raw('select * from humaninfo;');
    res.json(result[0]);
  } catch (err) {
    res.json(err);
  }
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
