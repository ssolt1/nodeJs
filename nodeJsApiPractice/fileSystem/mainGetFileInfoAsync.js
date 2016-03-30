var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");

   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());
});

/*steves@druk-omen4:~/Documents/repositories/nodeJsPractice/fileSystem$ node main.js
Going to get file info!
{ dev: 2057,
  mode: 33204,
  nlink: 1,
  uid: 1000,
  gid: 1000,
  rdev: 0,
  blksize: 4096,
  ino: 3552362,
  size: 95,
  blocks: 8,
  atime: Tue Mar 01 2016 12:13:38 GMT-0700 (MST),
  mtime: Tue Mar 01 2016 12:13:38 GMT-0700 (MST),
  ctime: Tue Mar 01 2016 12:13:38 GMT-0700 (MST),
  birthtime: Tue Mar 01 2016 12:13:38 GMT-0700 (MST) }
Got file info successfully!
isFile ? true
isDirectory ? false*/
