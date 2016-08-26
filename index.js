var http = require('http');

http.ServerResponse.prototype.redirect = function (url) {
  this.statusCode = 302;
  this.setHeader('Location',url);
  this.end();
}

module.exports = http;