var http = require('..');
var app  = require('connect')();

app.use('/redirect',(req,res,next) => {
  res.redirect(301,'/hello');
  //res.redirect('http://www.google.com');
})

app.use('/hello',(req,res,next) => {
  res.end('hello world');
})

var server = http.Server(app);

server.listen(3006);
