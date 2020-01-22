const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
// 저절로 readStream의 데이터가 writeStream으로 넘어간다.
readStream.pipe(writeStream);
