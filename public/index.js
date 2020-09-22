const express = require('express');
const routes = require('../routes/api');
var cookieParser = require('cookie-parser')

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(routes);

app.listen(3000);
