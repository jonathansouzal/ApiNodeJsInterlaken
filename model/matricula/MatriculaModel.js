const db = require('../../banco/dbConexao');

module.exports = class MatriculaModel {

    static getTodos(callback) {
        return db.query("SELECT * FROM matricula", callback);
    }

    static getId(nome, callback) {
        return db.query("SELECT * FROM matricula WHERE nome = ?", [nome], callback)
    }

    static adicionar(matricula, callback) {
        return db.query("INSERT INTO matricula (descricao, detalhes) VALUES(?, ?)",
            [matricula.descricao, matricula.detalhes], callback);
    }

    static deletar(nome, callback) {
        return db.query("DELETE FROM matricula WHERE nome = ?",
            [nome], callback)
    }

    // static editar(matricula, callback) {
    //     return db.query("UPDATE matricula SET descricao = ?, detalhes = ? WHERE nome = ?",
    //     [matricula.descricao, matricula.detalhes, matricula.id_matricula], callback)
    // }

};

