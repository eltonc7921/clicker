const express = require('express');

const app = express();
const port = 3000;

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (request, response) => {
	response.redirect('/public/index.html');
});

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
