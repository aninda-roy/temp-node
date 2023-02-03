//async or non-blocking
const {readFile, writeFile} = require('fs')
//async approach to read file, and (err, result) is the call back function
console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err){
        console.log(err)
        return
    }
    //console.log(result)
    const first = result

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err){
            console.log(err)
            return
        }
        //console.log(result)
        const second = result

        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return;
                }
                console.log('done with this task')            
        })
    })
})
console.log('starting the next one')

/*
Output:
start
starting the next one
done with this task

^ here node, offloads the task to a different fork/chilc/process
and keeps executing the rest of the code, and in the meantime the task eventually completes.
so the app can keep running while the ask is getting executed in background
*/