const mysql = require('mysql');

const conexao = mysql.createPool({
    host: 'recorrentedb-cluster.cluster-cerz9iqvkuhm.us-east-1.rds.amazonaws.com',
    user: 'recorrenteDB',
    password: 'Dy3Js6xygX8JyCA',
    database: 'recorrenteDB'
});

module.exports = conexao;