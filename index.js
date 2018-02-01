const express = require('express');
const fs = require('fs');
const app = express();

app.use('/img', express.static(__dirname + '/img'));

app.get('/', function (req, res) {
  let files = [];
  let size = 14.1;
  if (req.query.size) {
    size = req.query.size;
  }
  fs.readdirSync('./img/').forEach(file => {
    files.push(file);
  })
  res.render('index.ejs', {
    size: size,
    img: files
  });
})

app.listen(3000, function () {
  console.log('App listening on http://localhost:3000')
})