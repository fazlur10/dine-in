'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const restuarantRoutes = require('./routes/restuarant-route');
const offerRoutes = require('./routes/offer-route');
const foodRoutes = require('./routes/food-route')

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api',restuarantRoutes.routes);
app.use('/api',offerRoutes.routes);
app.use('/api',foodRoutes.routes);

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));