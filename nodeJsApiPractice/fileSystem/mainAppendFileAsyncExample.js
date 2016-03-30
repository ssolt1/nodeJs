var fs = require("fs");

console.log("Going to append into existing file");
fs.appendFile('input.txt.orig', 'Simply Easy Learning!',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('input.txt.orig', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
