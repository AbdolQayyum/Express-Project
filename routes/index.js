var express = require('express');
var router = express.Router();
var LanguageModel = require("../models/languagemodel")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render("mainpage");
// });

router.get('/mainpage', function(req, res, next) {
  res.render("mainpage");
});

router.get('/login', function(req, res, next) {
  res.render("login");
});

router.get('/mainpage/languages', async function(req, res, next) {
  let language = await LanguageModel.find();
  console.log(language)

  res.render("languages/language",{language});
});

module.exports = router;
