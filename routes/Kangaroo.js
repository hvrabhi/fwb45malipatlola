var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Kangaroo', { title: 'search results Kangaroo' });
});

module.exports = router;
