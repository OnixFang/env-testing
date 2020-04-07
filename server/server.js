const app = require('express')();

app.get('/*', (req, res) => {
  res.send('I works!');
});

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log('App is listening on port:', process.env.PORT);
  });
} else {
  console.log('PORT environment variable not found!');
  process.exit();
}