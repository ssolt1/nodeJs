var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

// hostname
console.log('hostname : ' + os.hostname());

//  os.arch()
console.log('architecture : ' + os.arch());

// uptime
console.log('uptime : ' + os.uptime());

//  os.cpus
console.log('cpu info : ' + os.cpus());

// networkinterfaces
console.log('network Interfaces : ' + os.networkInterfaces());
