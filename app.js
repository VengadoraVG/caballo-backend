import config from './config';
import express from 'express';

import model from './model/main';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(config.port, function () {
  console.log('listening on 3000 port');
  model.sync(true);
});
