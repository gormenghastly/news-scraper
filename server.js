const express = require('express');
//const request = require('request');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

//const db = require('./models');
const apiRouter = require('./routes/api-routes');
const htmlRouter = require('./routes/html-routes.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(apiRouter);
app.use(htmlRouter);

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoNews';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log('app listening on port:' + PORT);
});
