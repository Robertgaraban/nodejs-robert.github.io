const express = require('express')

const app = express()

app.get('/fotos', (req, res) => {
    req.send('<html><body><h1>Cheguei na rota de fotos de Robert</h1></body></html>')
})

app.listen(8080, () => {
    console.log('Iniciendo nosso terminal express')
})





/* nosso antego codigo, agora vamos cola a express
const http = require('http')

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {
        if (req.url === '/fotos') {
            res.writeHead(200)
            res.end('<html><body><h1>Cheguei na rota de fotos de Robert</h1></body></html>')

        } else if (req.url === '/cachorros') {
            res.writeHead(200)
            res.end('<html><body><h1>Cheguei na rota dos cachorross de Robert</h1></body></html>')

        } else {
            res.writeHead(404)
            res.end('<html><body><h1>Nao achei uma rota de Robert</h1></body></html>')

        }




    } else if (req.method === 'POST') {
        res.writeHead(200)
        res.end('<html><body><h1>Respondendo uma requesicao POST</h1></body></html>')

    } else if (req.method === 'PUT') {
        res.writeHead(200)
        res.end('<html><body><h1>Respondendo uma requesicao PUT</h1></body></html>')

    } else if (req.method === 'DELETE') {
        res.writeHead(200)
        res.end('<html><body><h1>Respondendo uma requesicao DELETE</h1></body></html>')

    } else {
        res.writeHead(400)
        res.end('NAO SE TRATAR ESE METHODO HTTP: ${rep.method}')

    }
})

server.listen(8080) */