const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false, //isso indica que quando houver uma requisição para busca de usuários, o password não venha junto
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Criando senha aleatória com hash
UserSchema.pre('save', async function(next) { //function pre do mongoose que define algo antes de salvar;
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const User = mongoose.model('User', UserSchema); //criando model

module.exports = User;