const express = require('express');
const mongoose = require('mongoose');
const Note = require('../models/note');
const router = express.Router();

/* GET login page. */
router.get('/', (req, res, next) => {
  res.render('login', { title: 'Login', message: null });
});
/* GET home page. */
router.get('/home', (req, res, next) => {
  try {
    if (login) {
      res.render('home', { title: 'Home', message: null });
    } else {
      res.render('login', { title: 'Login', message: null });
    }
  } catch {
    res.render('login', { title: 'Login', message: null });
  }
});
/* GET cadastroFunc page. */
router.get('/cadastroFunc', (req, res, next) => {
  res.render('cadastroFunc', { title: 'Cadastro de Funcionários', message: null });
});
/* GET cadastroPeca page. */
router.get('/cadastroPeca', (req, res, next) => {
  res.render('cadastroPeca', { title: 'Cadastro de Peças', message: null });
});
/* GET listarPeca page. */
router.get('/listarPeca', (req, res, next) => {
  res.render('listarPeca', { title: 'Listagem de Peças', message: null });
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

router.post('/:id/edit', async (req, res, next) => {
  let noteToChange = await Note.findById(req.params.id);
  noteToChange.nome = req.body.inputNome;
  noteToChange.CPF = req.body.inputCPF;
  noteToChange.data = req.body.inputDt;
  noteToChange.sexo = req.body.inputSexo;
  noteToChange.cep = req.body.inputCEP;
  noteToChange.num = req.body.inputNum;
  noteToChange.tel = req.body.inputTel;
  noteToChange.email = req.body.inputEmail;
  noteToChange.login = req.body.inputLogin;
  noteToChange.senha = req.body.inputSenha;
  await Note.findByIdAndUpdate(noteToChange.id, noteToChange, { new: true });
  res.redirect('/listFunc');
});

router.get('/buscaN', async (req, res, next) => {
  let result = await Note.findOne({ nome: req.query.inputNome });
  if (result)
    res.render('listUmFunc', { title: 'Resultado', note: result });
  else
    res.render('notFound', { title: 'Problemas na busca com o nome!' });
});

router.get('/buscaC', async (req, res, next) => {
  let result = await Note.findOne({ CPF: req.query.inputCpf });
  if (result)
    res.render('listUmFunc', { title: 'Resultado', note: result });
  else
    res.render('notFound', { title: 'Problemas na busca com o CPF!' });
});

router.get('/Vlogin', async (req, res, next) => {
  let resultL = await Note.findOne({ login: req.query.inputLogin });

  try {
    if (resultL.senha == req.query.inputSenha) {
      res.render('home', { title: 'Center Tech', message: null, login: true });
    } else {
      res.render('login', { title: 'Login', message: 'Erro ao efetuar o login', login: false });
    }
  } catch {
    res.render('login', { title: 'Login', message: 'Erro ao efetuar o login', login: false });
  }

});

module.exports = router;