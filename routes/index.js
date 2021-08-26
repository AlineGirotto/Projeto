const express = require('express');
const mongoose = require('mongoose');
const Note = require('../models/note');
const router = express.Router();

/* GET login page. */
router.get('/', (req, res, next) => {
  res.render('login', { title: 'Login' });
});
/* GET home page. */
router.get('/home', (req, res, next) => {
  res.render('home', { title: 'Home'});
});
/* GET cadastroFunc page. */
router.get('/cadastroFunc', (req, res, next) => {
  res.render('cadastroFunc', { title: 'Cadastro de Funcionários' });
});
/* GET cadastroPeca page. */
router.get('/cadastroPeca', (req, res, next) => {
  res.render('cadastroPeca', { title: 'Cadastro de Peças' });
});
/* GET listarPeca page. */
router.get('/listarPeca', (req, res, next) => {
  res.render('listarPeca', { title: 'Listagem de Peças' });
});

router.post('/addF', async (req, res, next) => {
  let nome2 = req.body.nome;
  let CPF2 = req.body.cpf;
  let data2 = req.body.data;
  let sexo2 = req.body.sexo;
  let cep2 = req.body.cep;
  let num2 = req.body.num;
  let tel2 = req.body.tel;
  let email2 = req.body.email;
  let log = req.body.login;
  let senha2 = req.body.senha;
  // cria o objeto e insere no banco
  let func = await Note.create({
    nome: nome2,
    CPF: CPF2,
    data: data2,
    sexo: sexo2,
    cep: cep2,
    num: num2,
    tel: tel2,
    email: email2,
    login: log,
    senha: senha2
  });
  res.redirect("/cadastroFunc");
});

router.get('/listFunc', async (req, res, next) => {
  try {
    let result = await Note.find().exec();
    res.render('listFunc', { title: 'Lista de Funcionários', notes: result });
  } catch (e) {
    console.error(e);
  }
});

router.post('/:id/del', async (req, res, next) => {
  await Note.findByIdAndRemove(req.params.id);
  res.redirect('/listFunc');
});

router.get('/:id/edit', async (req, res, next) => {
  let noteToChange = await Note.findById(req.params.id);
  res.render('editarFunc', { title: 'Editar os Dados', note: noteToChange });
});

module.exports = router;