// Importar módulos
const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')
const porta = 8001

const home = path.join(__dirname,'/pages/index.html')
const compras = path.join(__dirname, '/pages/compras.html')

// criar servidor e rotas
const server = http.createServer((req, res) => {
// rotas e conteúdos
const urlTratada = new URL(req.url, `http://${req.headers.host}`)
const caminhoPesquisado = urlTratada.pathname
if (caminhoPesquisado === '/') {
res.setHeader('Content-Type', 'text/html; charset=utf8')
return res.end('<h3>Página Inicial</h3>')
}
if (caminhoPesquisado === '/compras') {
res.setHeader('Content-Type', 'text/html; charset=utf8')
return res.end('<h3>Página de Compras</h3>')
}else {
res.setHeader('Content-Type', 'text/html; charset=utf8')
res.end('<h3>Página não permitida</h3>')
}

})