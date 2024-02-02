const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));

app.use(userRoutes);
app.use('/admin',adminRoutes);

mongoConnect(()=>{
    app.listen(3000);
})

