import express from 'express';

const app = express();


app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/placeholder');
});

app.get('/site', (req, res) => {
  res.render('pages/index');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
