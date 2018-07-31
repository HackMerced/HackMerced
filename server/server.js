const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = process.env.port || 3000;

const api = require('./api/routes');

//mongoose.connect('hackmerced-1za3e.mongodb.net');

app.listen(port, () => console.log('server has started!'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/api', api);
app.use(express.static(path.resolve(__dirname, 'test_public')));
app.get('*', async (req, res) => {
    console.log('index accessed');
    res.sendFile(path.join(__dirname, 'test_public/test_index.html'));
});

