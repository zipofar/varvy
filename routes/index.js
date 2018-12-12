var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pagespeed');
});

router.get('/pagespeed', function(req, res, next) {
  res.render('pagespeed');
});

router.get('/pagespeed-result', function(req, res, next) {
  res.render('pagespeed-result');
});

router.get('/seo', function(req, res, next) {
  res.render('seo');
});

router.get('/seo-result', function(req, res, next) {
  res.render('seo-result');
});

router.get('/mobile', function(req, res, next) {
  res.render('mobile');
});

router.get('/mobile-result', function(req, res, next) {
  res.render('mobile-result');
});

module.exports = router;
