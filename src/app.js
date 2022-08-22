const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const configViewEngine = require('./config/viewEngine');

app.use(cors());

require('dotenv-safe').config();

configViewEngine(app);

const index = require('./routes/indexRoutes');
const homepage = require('./routes/homepageRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', index, homepage);


module.exports = app;
