const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

const criarBanco = async () => {

    const db = await open ({
        filename: './database.db',
        driver: sqlite3.Database

    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS desaparecidos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            foto_url TEXT,
            endereco TEXT NOT NULL,
            contato     TEXT    NOT NULL,
            observacoes TEXT,
            status      TEXT    NOT NULL DEFAULT 'desaparecido',
            criado_em   DATETIME DEFAULT CURRENT_TIMESTAMP
        
        );
        
            `)
    console.log("✅ Banco de dados inicializado com sucesso!",
    );

    const resultadoFinal = await db.all(`SELECT * FROM desaparecidos`);
    console.table(resultadoFinal);

return db;

};

module.exports = {criarBanco}