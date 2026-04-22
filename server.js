const express = require('express');
const { criarBanco } = require('./database');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// corrigido
app.use(express.static(path.join(__dirname)));

// banco inicializado uma vez só
let db;
(async () => {
  db = await criarBanco();
})();

// rota inicial (resolve o "Cannot GET /")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'cade_voce.html'));
});

// ROTAS
app.get('/desaparecidos', async (req, res) => {
  const lista = await db.all(`SELECT * FROM desaparecidos`);
  res.json(lista);
});

app.get('/desaparecidos/:id', async (req, res) => {
  const { id } = req.params;
  const item = await db.get(`SELECT * FROM desaparecidos WHERE id = ?`, [id]);
  res.json(item);
});

app.post('/desaparecidos', async (req, res) => {
  const { nome, foto_url, endereco, contato, observacoes, status } = req.body;

  await db.run(
    `INSERT INTO desaparecidos(nome, foto_url, endereco, contato, observacoes, status)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [nome, foto_url, endereco, contato, observacoes, status]
  );

  res.send(`Desaparecido ${nome} registrado com sucesso!`);
});

app.put('/desaparecidos/:id', async (req, res) => {
  const { id } = req.params;
  const { status, observacoes } = req.body;

  await db.run(
    `UPDATE desaparecidos
     SET status = ?, observacoes = ?
     WHERE id = ?`,
    [status, observacoes, id]
  );

  res.send(`Caso ${id} atualizado`);
});

app.delete('/desaparecidos/:id', async (req, res) => {
  const { id } = req.params;

  await db.run(`DELETE FROM desaparecidos WHERE id = ?`, [id]);

  res.send(`Caso ${id} deletado`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});