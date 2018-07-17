const mongoose = require('mongoose');
const {dbUsername, dbPassword} = require('./secrets');
const url = 'mongodb+srv://' + dbUsername + ':' + dbPassword + '@hackmerced-1za3e.mongodb.net';

module.exports.users = mongoose.createConnection(url + '/users', {useNewUrlParser: true});
module.exports.resources = mongoose.createConnection(url + '/resources', {useNewUrlParser: true});
