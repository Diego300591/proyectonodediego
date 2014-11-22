var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get("/registro/",function(req,res){
	res.render('registro',{ title: 'Express'});
});
router.get("/login/",function(req,res){
	res.render("login",{ title: "Express"});
})
router.get("/partidanueva/",function(req,res){
	res.render("partidanueva",{})
})