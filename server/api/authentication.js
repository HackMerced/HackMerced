const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {secretKey} = require('./secrets');

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 8);
};
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};
const signJWT = (userId) => {
    return jwt.sign({id: userId}, secretKey, {
        expiresIn: 86400 // expires in 24 hours
    });
};
const verifyJWT = (token) => {
    try {
        return {success: true, id: jwt.verify(token, secretKey).id};
    } catch (e) {
        return {success: false};
    }
};
module.exports.hashPassword = hashPassword;
module.exports.comparePassword = comparePassword;
module.exports.signJWT = signJWT;
module.exports.verifyJWT = verifyJWT;