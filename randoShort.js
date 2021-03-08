const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ9"];

var randoSeed = [...Array(81)].map(i=>chars[Math.random()*chars.length|0]).join``;

console.log(randoSeed)
