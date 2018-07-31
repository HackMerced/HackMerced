const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {secret} = require('../secret/secrets');


const User = require('../model/models');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const hashPassword = (password)=> {
    bcrypt.hashSync(password, 8);
};

const signJwt = (email, secret)=> {
    jwt.sign({email : email}, secret, {expiresIn: 86400});
};

const verifyJwt = (token, secret) => {
    jwt.verify(token, secret);
};


module.exports.hashPassword = hashPassword;
module.exports.signJwt = signJwt;
module.exports.verifyJwt = verifyJwt;