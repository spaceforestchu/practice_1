var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:page', function(req, res, next){
  var page = req.params.page
  res.render(page, { title: 'Express' });
})

module.exports = router;
