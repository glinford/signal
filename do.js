var convert = require("./signal");
var endpoint = require("./api");
var API = "api";

for(var i = 0; i < process.argv.length; i++) {
    if(i === 2 && process.argv[i] === API){
      endpoint.start();
      break;
    } else if(i > 1){
      console.log(convert(process.argv[i]));
    }
};
