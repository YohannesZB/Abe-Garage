// import express and path modules
const express = require('express');
const path = require('path');
// create an express app
const app = express();
// serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));
// redirect all the requests to index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// listen on the default port 80
app.listen(80);