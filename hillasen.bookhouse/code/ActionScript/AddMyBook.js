module.exports.function = function addMyBook (isbn, $vivContext) {
var http = require('http')
var console = require('console')
var config = require('config')
var options = { 
    format: 'text',
    cacheTime: 0
  };
var obj = http.getUrl('http://hillasen.com/bookhouse/bookhouse_found.php?cmd=add&token=' + $vivContext.userId +"&isbn="+isbn ,options);
return {
  isbn: isbn
}
}