const path= require('path');
const express= require('express');
const morgan= require('morgan');
const { engine }= require('express-handlebars');
const { dirname } = require('path');
const app= express();
const port= 3000;
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//HTTP LOGGER
// app.use(morgan('combined'));
//TEMPLATE ENGINE

app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set("view engine", 'hbs');
app.set('views',path.join(__dirname, 'resources/views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
})