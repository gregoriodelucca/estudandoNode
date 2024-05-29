const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    let name = require('url').parse(req.url, true).query.name
    if (name === undefined) name = 'mundo'
    if (name == 'burningbird') {
        let file = 'phoenix.jpg'
        fs.stat(file, function (err, stat){
            if (err){
                console.error(err)
                res.writeHead(200, {'content-type': 'text/plain'})
                res.end('sorry, burningbird inst around right now \n')
            } else {
                let img = fs.readFileSync(file)
                res.contentType = 'image/png'
                res.contentLength = stat.size
                res.end(img, 'binary')
            }
        })
    } else {
        res.writeHead(200, {'content-Type': 'text/plain'})
        res.end('opaa' + name + '\n')
    }
}).listen(3030)

console.log('servidor rodando port 3030')