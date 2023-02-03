// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minumum)
const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alt-flavour')
require('./7-mind-grenade')
sayHi ('Aninda')
sayHi(names.john)
sayHi(names.peter)