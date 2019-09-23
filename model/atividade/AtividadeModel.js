const db = require('../../banco/dbConexao');

module.exports = class AtividadeModel {

    static getTodos(callback) {
        return db.query("SELECT * FROM atividade", callback);
    }

    static getId(title_url, callback) {
        return db.query("SELECT * FROM atividade WHERE title_url = ?", [title_url], callback)
    }

    static adicionar(atividade, callback) {
        return db.query("INSERT INTO atividade (title_url, title, valor_matricula, valor_mensalidade) VALUES(?, ?, ?, ?)",
            [atividade.title_url, atividade.title, atividade.valor_matricula, atividade.valor_mensalidade], callback);
    }

    static deletar(title_url, callback) {
        return db.query("DELETE FROM atividade WHERE title_url = ?",
            [title_url], callback)
    }

    static editar(atividade, callback) {
        return db.query("UPDATE atividade SET title = ?, detalhes = ? WHERE title_url = ?",
        [atividade.title_url, atividade.title, atividade.valor_matricula, atividade.valor_mensalidade], callback)
    }

};

