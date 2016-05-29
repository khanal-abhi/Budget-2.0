var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.db.collection('dummy').find({}, {_id:0, name:1, price:1}).toArray(function(err, doc){
    res.send(doc);
  });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
