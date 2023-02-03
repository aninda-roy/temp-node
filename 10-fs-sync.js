//sync or blocking
const {readFileSync, writeFileSync} = require('fs')
// const fs = require('fs')
// fs.readFileSync()
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`
)
//writeFileSync(
 //   './content/result-sync.txt',
 //   `Here is the result: ${first}, ${second}`,
 //   { flag: 'a' }
 //   )
 // ^^ flag: 'a' to append at the end of file
console.log('done with this task')
console.log('starting the next one')
/*
Output:
start
done with this task
starting the next one

^ so node first finishes the task and then continues with rest of the code
so if the task takes long time, then the app will keep waiting for the task to complete first
*/