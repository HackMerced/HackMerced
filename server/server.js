const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();
const port = process.env.port || 3000;

const api = require('./api/routes');

app.listen(port, async () => {
    console.log('server has started!')
});
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/api', api);
app.get('*', async (req, res) => {
    console.log('index accessed');
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

