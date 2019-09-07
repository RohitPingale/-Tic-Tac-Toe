var express = require('express');
var app = express();

app.get('/home',(req , res) => {
	res.send(require('./App.js'));
});

app.get('/tictactoe',(req , res) => {
	res.send(require('./App.js'));
});

app.get('/nomatch',(req , res) => {
	res.send(require('./App.js'));
});

app.get('/about',(req , res) => {
	res.send(require('./App.js'));
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}`));
