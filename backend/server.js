const express = require('express');
const app = express();


const port = process.env.PORT || 3000;

// serve static assets (stylesheets, images, etc.)
// app.use(express.static('public'));
app.use(express.static(__dirname));

// serve the HTML file
app.get('/', function (req, res) {

  res.sendFile(__dirname + '/index.html');
});

app.get('/chatbot.html', function (req, res) {
  res.sendFile(__dirname + '/chatbot.html');
});


// start the server
app.listen(port, function (req, res) {
  console.log(`Server listening on port ${port}.`);
});
