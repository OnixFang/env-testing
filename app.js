const app = require('express')();

app.get('/*', (req, res) => {
  res.send('I works!');
});

app.listen(process.env.PORT, () => {
  console.log('App is listening on port:', process.env.PORT);
});