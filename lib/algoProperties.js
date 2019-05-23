var multiHashing = require('multi-hashing');
var util = require('./util.js');

var diff1 = global.diff1 = 0x00000000ffff0000000000000000000000000000000000000000000000000000;

var algos = module.exports = global.algos = {
    argon2d: {
        multiplier: Math.pow(2, 16),
        hash: function(){
            return function(){
                return multiHashing.argon2d.apply(this, arguments);
            }
        }
    }
};


for (var algo in algos){ // multialgo coins check
    if (!algos[algo].multiplier)
        algos[algo].multiplier = 1;
}

