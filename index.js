const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Welcome to my demo tutorial!')
});

app.get('/greet', (req, res)=>{
    res.send('Hello there, how is your day going?')
});

app.listen(PORT, ()=>{
    console.log('Application started successfully on port: ' + PORT);
});



// THIS ONE WORKS BELOW VVVV

// var http = require('http')
// var port = process.env.PORT || 1337;
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hi World\n');
// }).listen(port);



// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// app.listen(port, () => {
//     console.log('server running')
// })