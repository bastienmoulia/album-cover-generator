const express = require('express');
const fs = require('fs');
const app = express();
const isImage = require('is-image');
const sizeOf = require('image-size');

app.use('/img', express.static(__dirname + '/img'));

app.get('/', function (req, res) {
  let files = [];
  let size = 14.1;
  if (req.query.size) {
    size = req.query.size;
  }
  fs.readdirSync('./img/').forEach(file => {
    if (isImage('./img/' + file)) {
      files.push({
        img: file,
        width: sizeOf('./img/' + file).width,
        height: sizeOf('./img/' + file).height
      });
    }
  })
  console.log(files);
  res.render('index.ejs', {
    size: size,
    img: files
  });
})

app.listen(3000, function () {
  console.log('App listening on http://localhost:3000')
})