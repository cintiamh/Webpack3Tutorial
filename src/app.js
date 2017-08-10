const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send('Test route success!');
});

app.get('/*', (req, res) => {
  res.send(`${req.url} route success!`);
});

app.listen(3000, () => {
  console.log('App listening on port: 3000');
});
