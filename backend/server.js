const express = require('express');
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
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


io.on('connection', () => {
  console.log('user connected');
});

app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) => {
    if (err)
      sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})



// start the server
app.listen(port, function (req, res) {
  console.log(`Server listening on port ${port}.`);
});
