var express = require('express');
var router = express.Router();
var AtividadeModel = require('../model/atividade/AtividadeModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/", function(req, res, next){

    AtividadeModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
           // console.log('erro:', erro);
        }else{
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
});

router.get("/:title_url?", function(req, res, next){

    AtividadeModel.getId(req.params.title_url ,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            //console.log('erro:', erro);
        }else{
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
})


router.post("/?", function(req, res, next){

    AtividadeModel.adicionar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            //console.log('erro:', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "cadastro realizado com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível realizar a operação.'
            }
        }
       // console.log('resp:', resposta);
        res.json(resposta);
    })
})

router.delete("/:title_url", function(req, res, next){

    AtividadeModel.deletar(req.params.title_url, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
           // console.log('erro:', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro excluído com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível excluir o resgistro.'
            }
        }
       // console.log('resp:', resposta);
        res.json(resposta);
    })
})

router.put("/", function(req, res, next){

    AtividadeModel.editar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
           // console.log('erro:', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro editado com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível editar o resgistro.'
            }
        }
       // console.log('resp:', resposta);
        res.json(resposta);
    })
})

module.exports = router;
