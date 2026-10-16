import express from 'express'

const app = express()
const porta = 3000

// Criar as rotas do servidor 
app.get('/', (req, res) => {
    res.send('Olá, abacaxi!')
})

// Liberar a porta do meu computador
app.listen(porta, () => { console.log('Servidor está vivo!')})

