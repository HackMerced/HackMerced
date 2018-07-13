const express = require('express');
const app = express();
const port = 80;

const api = require('./api/route');

app.listen(port, () => console.log('server has started!'));

app.use((req, res, next) => {
   console.log('time: ', new Date());
   next()
});

app.get('/', (req, res) => {
    console.log('index accessed');
    res.send(JSON.stringify({success: true}))
});

app.use('/api', api);
