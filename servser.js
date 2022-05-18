const http = require('http');
const server = http.createServer(function(req,res){
    res.write('hello')
    res.end
})
const hostname = '127.0.0.1';
const port = 4000;