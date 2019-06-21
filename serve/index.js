const express=require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const open = require('open');

const app = express();

//importando rutas
const lux2019 = require('./routes/lux2019');

//configuraciones
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Middlewares

app.use(morgan('dev'));
app.use(myconnection(mysql,{
  host:'127.0.0.1',
  user:'desarrollo',
  password:'arc12313.',
  port:'8889',
  database:'regresoaclases2019'
},'single'));
app.use(express.urlencoded({extended: false}));

//Routers

app.use('/',lux2019);

//staticos

app.use(express.static(path.join(__dirname,'public')));

//iniciando el servidor
app.listen(app.get('port'),()=> {
  console.log('Server on port '+app.get('port'));
});

//open("http://localhost:"+app.get('port')+"/", "chrome --kiosk");