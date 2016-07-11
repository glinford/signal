(function () {

'use strict';

var start = function(){
  var convert = require("./signal");
  var express = require('express');
  var app = express();

  app.get('/convert/:nbr', function (req, res) {
    if(req.params && req.params.nbr){
      res.send(convert(req.params.nbr));
    } else {
      res.send('Usage: GET /convert/NUMBER');
    }
  });

  app.get('*', function (req, res) {
    res.send('Usage: GET /convert/NUMBER');
  });

  app.listen(process.env.PORT || 8080);
}

if (typeof exports != 'undefined') {
  if (typeof module != 'undefined' && module.exports) {
    exports = module.exports = {start: start};
  }
  exports.api = {start: start}
}

}());
