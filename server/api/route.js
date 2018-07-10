const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    console.log('api accessed');
    res.send(JSON.stringify({success: true, page: 'api'}))

});

module.exports = router;