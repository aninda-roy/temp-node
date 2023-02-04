// npm - global command, comes with node
// npm --version

// local dependency -use it only in this particular project
// npm i <pakageName>

// global dependency - use it in any project
// npm install -g <packageName>

//package.json - manifest file (stores import info about the project/package)
//manual approach (create package.json in the root, create properties, etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

//npm install (installs all dependencies from package.json file)
//npm i nodemon -D (installs the module as a dev dependency)
//dev depency does not get pushed to production while running npm install

//npm uninstall packageName for uninstalling a module/package/dependency

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)
console.log('Hello world!!')