const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');
const fs = require('fs');
const app=express();

var open = require("open");

const Server=http.createServer(app);
const io=SocketIO.listen(Server);

app.use(express.static(__dirname + '/public'))

open("http://localhost:3000/", "chrome");

Server.listen(3000,function(){
  console.log('Servidor Ecuchando en el puerto 3000');
});



const SerialPort =require('serialport');
const ReadLine= SerialPort.parsers.Readline;


const port =new SerialPort('/dev/cu.usbmodem1441',{
  baudRate:9600
});

const parser= port.pipe(new ReadLine({ delimiter: '\r\n'}));

parser.on('open',function(){
  console.log('conexcion abierta')
});

parser.on('data',function(data){
  //let temp=intParse(data,10);
  console.log(data);
  io.emit('force',data)

})

port.on('error',function(err){
  console.log(err);
});
io.on('connection', (socket) => {
    /**
   * Socket listener to determine whether or not to send HIGH / LOW
   * values to Arduino.
   */
  socket.on('message', (msg) => {
    console.log('Message received: ', msg);
    switch (msg) {
      case 'on':
        port.write('a');
        break;
      case 'off':
        port.write('b');
        break;
      default:
        break;
    }
  });
});