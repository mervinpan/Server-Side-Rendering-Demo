import express from 'express';
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

const compression = require('compression');

import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import App from '../client/src/App.jsx';
import template from './template.js'

app.use(express.static('client/dist/'));
app.use(compression())

var initialData = 'https://i.redd.it/2105ufb7aa751.jpg'

app.get('*', (req, res) => {
  var appString = ReactDOMServer.renderToString(<App images={initialData}/>)
  var html = template(appString, initialData)
  res.send(html)
})
