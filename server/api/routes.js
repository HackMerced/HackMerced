const express = require('express');
const router = express.Router();
const mongo = require('./db');
const mongoDB = require('mongodb');
const {secret} = require('../secret/secrets');
const auth = require('../auth/auth_controller');

router.get('/', (req, res) => {
    console.log('api accessed');
    res.send(JSON.stringify({success: true, page: 'api'}))

});
//Volunteers
router.get('/users/volunteers', async (req, res) => {
    const users = await mongo.users();
    if ('email' in req.query) {
        const volunteer_data = await users.collection('volunteers').find({email: req.query.email}).toArray();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(volunteer_data));
        res.end();
    } else {
        const volunteer_data = await users.collection('volunteers').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(volunteer_data));
        res.end();
    }
});
router.post('/users/volunteers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
//Hackers
router.get('/users/hackers', async (req, res) => {
    const users = await mongo.users();
    if ('email' in req.query) {
        const hacker_data = await users.collection('hackers').find({email: req.query.email}).toArray();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(hacker_data));
        res.end();
    } else {
        const hacker_data = await users.collection('hackers').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(hacker_data));
        res.end();
    }
});
router.post('/users/hackers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
//Sponsors
router.get('/users/sponsors', async (req, res) => {
    const users = await mongo.users();
    if ('email' in req.query) {
        let sponsor_data = await users.collection('sponsors').find({email: req.query.email}).toArray();
        sponsor_data = sponsor_data[0];
        if (!sponsor_data) {
            res.send(JSON.stringify({'error': 'Could not find email'}));
        } else if ('image' in req.query) {
            res.contentType('image/png');
            const resource = await mongo.resources();
            const bucket = new mongoDB.GridFSBucket(resource);
            await bucket.openDownloadStreamByName(sponsor_data.photo).pipe(res);
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(sponsor_data));
        }
    } else {
        const sponsor_data = await users.collection('sponsors').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(sponsor_data));
    }
});
router.post('/users/sponsors', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
//Judges
router.get('/users/judges', async (req, res) => {
    const users = await mongo.users();
    if ('email' in req.query) {
        let judge_data = await users.collection('judges').find({email: req.query.email}).toArray();
        judge_data = judge_data[0];
        if (!judge_data) {
            res.send(JSON.stringify({'error': 'Could not find email'}));
        } else if ('image' in req.query) {
            res.contentType('image/png');
            const resource = await mongo.resources();
            const bucket = new mongoDB.GridFSBucket(resource);
            await bucket.openDownloadStreamByName(judge_data.photo).pipe(res);
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(judge_data));
            res.end();
        }
    } else {
        const judge_data = await users.collection('judges').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(judge_data));
        res.end();
    }
});
router.post('/users/judges', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

router.post('/register', async (req, res) =>{
    req.body.user.password = auth.hashPassword(req.body.user.password);
    const users = await mongo.users();
    users.create({user : req.body.user},
        (err, user) => {
            if (err) return res.status(500).send("There was a problem registering the user.");
            const token = auth.signJwt(req.body.user.email, secret);

            res.status(200).send({ auth: true, token: token });
        });
});

router.get('/me', (req,res) => {
    const token = req.headers['x-access-token'];
    if (!token){
        return res.status(401).send({auth: false, message: 'No token provided'});
    }

    const verify = auth.verifyJwt(token, secret);
    //add if statement function that checks if token is authenticated (change functions to await and async)
    res.status(200).send(verify);

});


module.exports = router;