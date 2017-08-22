import express from 'express';
import API from './src/api/server';
var auth = require('basic-auth');

var ServerResponse = require('./config/lib/response');

const app = express();


app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/placeholder');
});

app.get('/api/video/:slug', (req, res) => {
  ServerResponse.success(res, JSON.stringify(API.getOneVideo(req.params.slug)));
});

app.get('/api/videos', (req, res) => {
  ServerResponse.success(res, JSON.stringify(API.getAllVideos()));
});

app.get('/api/logos', (req, res) => {
  ServerResponse.success(res, JSON.stringify(API.getAllLogos()));
});

app.get('/api/watch', (req, res) => {
  ServerResponse.success(res, JSON.stringify(API.getAllWatch()));
});


if(process.env.NODE_ENV !== 'development'){
  app.use(function(req, res, next){
      var user = auth(req);

      if (user === undefined || user['name'] !== process.env.USERNAME || user['pass'] !== process.env.PASSWORD) {
          res.statusCode = 401;
          res.setHeader('WWW-Authenticate', 'Basic realm="NodeJS"');
          return res.end('Unauthorized');
      } else {
          next();
      }
  });
}

app.get('/*', (req, res) => {
  res.render('pages/index');
});

app.get('*', (req, res) => {
  res.render('pages/not-found');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
