var convert = require("./signal");

process.argv.forEach(function (val, index, array) {
  if(index > 1){
    console.log(convert(val));
  }
});
