# http-res-redirect
### install
```	
npm install http-res-redirect
```

#### return
var http = require('http-res-redirect');

* it returns a http object;
* you only need change require('http) to require('http-res-redirect');

### example
```
var http = require('http-res-redirect');
var app  = require('connect')();

app.use('/redirect',(req,res,next) => {
  res.redirect(301,'/hello');
  // statusCode 302 by default
  res.redirect('/hello');
  //res.redirect('http://www.google.com');
})

app.use('/hello',(req,res,next) => {
  res.end('hello world');
})

var server = http.Server(app);

server.listen(3006);
```

### how it works ?
(req,res,next) => {}

* The res is an instance of http.ServerResponse, so we can append a redirect property to http.ServerResponse.prototype, like:

```
http.ServerResponse.prototype.redirect = function (code,url) {
  if ('string' === typeof code) {
    url = code;
    code = 302;
  }
  this.statusCode = code;
  this.setHeader('Location',url);
  this.end();
}
```