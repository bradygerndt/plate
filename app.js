const express = require('express');

//const routes = require('./routes')
const path = require('path');
const pug = require('pug');

var port = 3000;

const app = express();

var index = require('./routes/index');
var plates = require('./routes/plates');

//set up views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('pug').renderFile);

//static
//app.use(express.static(path.join(__dirname, 'client/src')));
app.use(express.static(path.join(__dirname, '/client')));
//app.use(express.static(path.join(__dirname, 'client/src/bower_components')));

app.use('/', index);
app.use('/api', plates);

app.listen(port, function()
{
  console.log('Server listening on 3000');
}
);
