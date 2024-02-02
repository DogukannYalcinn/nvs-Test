const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('./util/database');

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));

app.use(userRoutes);
app.use('/admin',adminRoutes);

app.listen(3000);