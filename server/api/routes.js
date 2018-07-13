const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('api accessed');
    res.send(JSON.stringify({success: true, page: 'api'}))

});
router.post('/users/volunteers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
router.get('/users/volunteers', (req, res) => {
    console.log('volunteers');
    res.send('volunteers');
});

module.exports = router;