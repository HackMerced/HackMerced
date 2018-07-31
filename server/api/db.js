const mongoDB = require('mongodb').MongoClient;
const {dbUser,dbPassword}= require('../secret/secrets');
const url = 'mongodb+srv://' + dbUser + ':' + dbPassword + '@hackmerced-1za3e.mongodb.net';
const connection = mongoDB.connect(url, {useNewUrlParser: true}).catch((e) => {
    console.log(e.message, "MONGODB");
});
const users = async () => {
    const completed_connection = await connection;
    return await completed_connection.db('users');
};
const resources = async () => {
    const completed_connection = await connection;
    return await completed_connection.db('resources');
};
module.exports.users = users;
module.exports.resources = resources;

