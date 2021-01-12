var fs = require('fs');


//Reading content from file async
var readME = fs.readFileSync('test.txt', 'utf-8');
console.log(readME);

//Reading content from file async
fs.readFile('test.txt', 'utf-8', function(err, data) {
    console.log(data);
});

//Writing into the file async
fs.writeFileSync('writeFile.txt', readME);

