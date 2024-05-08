const express = require('express');
const app = express();
const port = 3000; // Porta em que o servidor irá rodar

// Middleware para processar o corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Rota para lidar com o login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Aqui você pode adicionar a lógica de autenticação, como verificar o usuário e senha no banco de dados

    // Por simplicidade, vamos apenas enviar uma resposta de sucesso ou erro
    if (username === 'admin' && password === 'admin') {
        res.status(200).send('Login bem-sucedido');
    } else {
        res.status(401).send('Credenciais inválidas');
    }
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});