
import express from 'express';
import path from 'path';

const dirBase = import.meta.dirname;
const app = express();
const porta = 3000;

// Disponibiliza CSS, imagens e outros arquivos públicos
app.use(express.static(path.join(dirBase, 'src', 'publico')));

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(dirBase, 'src', 'paginas', 'index.html'));
});

// Página de produtos
app.get('/produtos', (req, res) => {
    res.sendFile(path.join(dirBase, 'src', 'paginas', 'produtos.html'));
});

// Página sobre
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(dirBase, 'src', 'paginas', 'sobre.html'));
});

// Página de contato
app.get('/contato', (req, res) => {
    res.sendFile(path.join(dirBase, 'src', 'paginas', 'contato.html'));
});

// Inicialização do servidor
app.listen(porta, () => {
    console.log(`URBAN MOTION disponível em http://localhost:${porta}`);
});
