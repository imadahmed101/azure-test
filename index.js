// THIS ONE WORKS TOO BELOW VVVV

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 80;

// app.get('/', (req, res)=>{
//     res.send('Welcome to my demo tutorial!')
// });

// app.get('/greet', (req, res)=>{
//     res.send('Hello there, how is your day going?')
// });

// app.listen(port, ()=>{
//     console.log('Application started');
// });



// THIS ONE WORKS BELOW VVVV

// var http = require('http')
// var port = process.env.PORT || 1337;
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hi World\n');
// }).listen(port);



const express = require('express')
const app = express()
// HAS TO HAVE PROCESS.ENV.PORT NOT JUST PORT 80 FOR IT TO WORK
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('YESSIR')
})

app.listen(port, () => {
    console.log('server running')
})