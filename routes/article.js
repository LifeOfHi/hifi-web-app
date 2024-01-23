var express = require('express');
var path = require('path');
var router = express.Router();


// Set the basedir property on res.locals
// router.use((req, res, next) => {
//   res.locals.basedir = path.join(__dirname, '../views');
//   next();
// });

// Define a route parameter to capture the article title
router.get('/:articleTitle', (req, res, next) => {
  const { articleTitle } = req.params;
  const articlePath = path.join('articles', articleTitle, 'index');
  res.render(articlePath);
});

module.exports = router;
