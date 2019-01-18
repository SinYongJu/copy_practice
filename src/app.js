const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());
app.use(express.static('public'));
app.use('/', require('./route'));
app.use('*', (req, res) => res.status(404).json({ 
  msg:'Page Not Found',
  url:`localhost:${process.env.PORT}://{directory-name}/{file-name}` 
}));

let restartPort = parseInt(PORT, 10);
let server = app.listen(PORT, () => console.log(`server started: listening on port : ${PORT}`));

server.on('close', ()=>{
  console.log('server closed');
  restartPort =restartPort + 1;
  server = app.listen(restartPort, () => console.log(`server restarted: listening on port : ${restartPort}`));
});

server.on('error', (e)=>{
  if(e.port === restartPort){
    console.log('server port duplicated! try other port..');
    server.close();
  }else{
    console.log('an error occurred', e);
  }
});



