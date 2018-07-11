var express = require('express');
var app = express();
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function(req, res){
	res.send('Strona Główna')
})

app.get('dynamic-view', function(req, res){
	res.render('dynamic', {
		user: {
			name: 'Jarek',
			age: '26'
		}
	})
})

app.get('/first-template', function(req, res){
	res.render('first-template')
})

app.listen(3000)