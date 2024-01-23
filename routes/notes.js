var express = require('express');
var path = require('path');
var router = express.Router();


// Set the basedir property on res.locals
// router.use((req, res, next) => {
//   res.locals.basedir = path.join(__dirname, '../views');
//   next();
// });

// Define a route parameter to capture the article title
router.get('/:notesTitle', (req, res, next) => {
  const { notesTitle } = req.params;
  const notePath = path.join('notes', notesTitle, 'index');
  res.render(notePath);
});

module.exports = router;
