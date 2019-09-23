const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const port = 9000;
const router = express.Router();

const atividadeRouter = require('./router/atividadeRouter');
const matriculaRouter = require('./router/matriculaRouter');

api.use(cors());

api.use(bodyparser.urlencoded({extended: true}));
api.use(bodyparser.json());

router.get("/", (req, res) => res.json({
    mensagem: 'API online...!'
}));

api.use('/', router);
api.use('/atividade', atividadeRouter);
api.use('/matricula', matriculaRouter);

api.listen(port);
//console.log('API node restfull...');
