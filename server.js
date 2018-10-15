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

app.get('/fib/:num', (req, res) => {
	const n = parseInt(req.params.num);
	let isFib = false;
	let before = 1;
	let i =1;
	while(i<=n){
		if (i===n){
			isFib = true;
			console.log('merp');
		}
		i = i+before;
		before = i-before;
	}
	if(isFib) res.send('this is a fibber boi');
	else res.send('not a fibbidoodadicky');
});

app.get('/fibo/:num', (req, res) => {
	const n = parseInt(req.params.num);
	let desired = 1;
	let before =1; 
	let index = 0;
	while (index<n-2){
		desired = desired+before;
		before = desired-before;
		index++;
	}
	res.send('your requested fibonacci: ' + desired);
});

app.listen(3000, () => {
	console.log('i am listening');
});
