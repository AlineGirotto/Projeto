const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const func = new Schema({
	nome: String,
	CPF: String,
	data: String,
	sexo: String,
	cep: String,
	num: String,
	tel: String,
	email: String
});

module.exports = mongoose.model('funcionario', func);