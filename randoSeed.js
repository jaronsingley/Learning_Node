function getRandoSeed(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
console.log(getRandoSeed(81))
