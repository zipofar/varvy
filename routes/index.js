var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/pagespeed', function(req, res, next) {
  res.render('pagespeed');
});

module.exports = router;
