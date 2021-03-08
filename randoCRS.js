const cryptoRandomString = require('crypto-random-string');

console.log(cryptoRandomString({length: 81, characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9'}));
