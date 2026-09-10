const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const db = require('./db.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// // Rota de Autenticação / Login
// app.post('/api/login', (req, res) => {
//     const { email, senha } = req.body;

//     const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
//     db.query(query, [email, senha], (err, results) => {
//         if (err) {
//             return res.status(500).json({ success: false, message: 'Erro no servidor.' });
//         }

//         if (results.length > 0) {
//             res.json({ success: true, message: 'Login realizado com sucesso!' });
//         } else {
//             res.status(401).json({ success: false, message: 'E-mail ou senha incorretos.' });
//         }
//     });
// });


// // armazena no banco de dados

// app.post('/api/login', (req, res) => {
//     const { email, senha } = req.body;

//     const query = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';

//     db.query(query, [email, senha], (err, result) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({
//                 success: false,
//                 message: 'Erro ao salvar no banco'
//             });
//         }

//         res.json({
//             success: true,
//             message: 'Dados registrados com sucesso!'
//         });
//     });
// });

app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;

    const query = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';

    db.query(query, [email, senha], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false });
        }

        res.json({ success: true });
    });
});

app.listen(3601, () => {
    console.log('Servidor rodando em http://localhost:3601');
});

