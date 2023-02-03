const path = require('path')

//shows the platform/os specific path separator
console.log(path.sep)

//shows normalised/relative path for passed path in the function
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// shows only the end at the end of the file path
const base = path.basename(filePath)
console.log(base)

//shows absolute/complete path for passed path in the function
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)