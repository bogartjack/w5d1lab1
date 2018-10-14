const express = require('express');
const app = express();

app.get('/greeting', (req, res) => {
	res.send('hello stranger');
});

app.get('/tip/:total/:percentage', (req, res) => {
 	const tip = req.params.total/req.params.percentage;
	res.json(tip);
});

app.get('/greeting/:name', (req, res) => {
	res.send('hello ' + req.params.name);
});

app.get('/magic/:question', (req, res) => {
	const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
	const response = responses[Math.floor(Math.random()*responses.length)];
	res.send(response);
});


app.listen(3000, () => {
	console.log('i am listening');
});
