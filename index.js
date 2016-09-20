'use strict';

var http = require('http');

http.ServerResponse.prototype.redirect = function (code,url) {
  if ('string' === typeof code) {
    url = code;
    code = 302;
  }
  this.statusCode = code;
  this.setHeader('Location',url);
  this.end();
}

module.exports = http;