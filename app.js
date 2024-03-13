// apelle des services
const express = require('express');
const app = express();
app.use(express.json());

const stuffRoutes = require('./routes/routes.stuff');

app.use('/api', stuffRoutes);

module.exports = app;