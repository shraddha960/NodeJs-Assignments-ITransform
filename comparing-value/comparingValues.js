const fs = require('fs');

fs.readFile('file1.txt', function (err, data) {
    if (err) throw err;
    if(data.indexOf('search string') >= 0){
     console.log(data)
    }
  });