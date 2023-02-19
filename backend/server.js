const express = require('express');
const app = express();

// serve static assets (stylesheets, images, etc.)
app.use(express.static('public'));

// serve the HTML file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server listening on port ${port}.`);
});
