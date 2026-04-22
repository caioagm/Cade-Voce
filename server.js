const express = require('express');
const { criarBanco } = require('./database')
const cors = require('cors')


const app = express();

app.use(cors())

app.use(express.json())

app.get( '/', (req, res) => {
    res.send(`
        <body>
    <h1> Cade Você? </h1>
    <h2> Plataforma utilizada na busca dos desaparecidos nas enchentes </h2>
    <p> Endpoint que leva aos incidentes cadastrados: /desaparecidos <p>    
        </body>
        
        `);
});

app.get('/desaparecidos',async (req, res) => { 
const db = await criarBanco()

const listaDesaparecidos = await db.all(`SELECT * FROM desaparecidos`)

res.json(listaDesaparecidos)
} )

app.get('/desaparecidos/:id', async (req, res) => {

const { id } = req.params 

const db = await criarBanco()

const incidenteEspecifico = await db.all(`SELECT * FROM desaparecidos WHERE id = ?`,[id])

res.json(incidenteEspecifico)

} )

app.post('/desaparecidos', async (req, res) => {

const {nome, foto_url, endereco, contato, observacoes, status, criado_em} = req.body

const db = await criarBanco()

await db.run(`INSERT INTO desaparecidos(nome, foto_url, endereco, contato, observacoes, status) VALUES (?, ?, ?, ?, ?, ?)`, [nome, foto_url, endereco, contato, observacoes, status])

res.send(`Desparecido novo registrado com o nome: ${nome} registrado em ${criado_em}, para mais informações entrar em contato com ${contato} `)

})

app.put("/desaparecidos/:id", async (req, res) => {
    const { id } = req.params;

    const {status, observacoes} = req.body;

    const db = await criarBanco();

    await db.run(`
        UPDATE desaparecidos
        SET status = ?,
        observacoes = ?
        WHERE id = ?`,
        [status, observacoes, id]
        )

        res.send(`O caso ${id} foi atualizado com sucesso`)
});

app.delete("/desaparecidos/:id", async(req, res) => {

    const {id} = req.params;

    const db = await criarBanco()

    await db.run(`
        DELETE from desaparecidos WHERE id = ?
        `, [id])

        res.send(`O desaparecido ${id} foi deletado com sucesso`)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});