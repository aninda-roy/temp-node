const http = require('http')
const server = http.createServer((req, res)=>{  //req= incoming reuqest from client, res= response from http server
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else {
        res.end(`
            <h1>Ooops!</h1>
            <p>We can't seem to find the page you're looking for</p>
            <a href="/">back home</a>
        `)
    }
})
server.listen(5000) //port the http server is listening to 