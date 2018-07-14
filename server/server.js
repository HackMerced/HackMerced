const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;

const api = require('./api/routes');
const mongo = require('./api/db');

app.listen(port, () => console.log('server has started!'));

app.use((req, res, next) => {
    console.log('time: ', new Date());
    next()
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', api);
app.use(express.static(path.resolve(__dirname, 'test_public')));
app.get('*', async (req, res) => {
    const users = await mongo.users();
    const user_data = await users.collection('judges').find().toArray();
    console.log(user_data);
    console.log('index accessed');
    res.sendFile(path.join(__dirname, 'test_public/test_index.html'));
});

