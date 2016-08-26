# connect-redirect
### install
```	
npm install http-res-redirect
```

### example
```
var http = require('http-res-redirect');
var app  = require('connect')();

app.use('/redirect',(req,res,next) => {
  res.redirect('http://www.google.com');
})

//app.use(...)

var server = http.Server(app);

server.listen(3006);
```

### how it works ?
(req,res,next) => {}

* The res is an instance of http.ServerResponse, so we can append a redirect property to http.ServerResponse.prototype, like:

```
http.ServerResponse.prototype.redirect = function (url) {
  this.statusCode = 302;
  this.setHeader('Location',url);
  this.end();
}

```