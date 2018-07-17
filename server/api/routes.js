const express = require('express');
const router = express.Router();
const mongoDB = require('mongodb');
const auth = require('./authentication');
const models = require('../model/models');
const resourcesDb = require('./db').resources;


router.get('/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log('api accessed');
    res.send(JSON.stringify({success: true, page: 'api'}));
});
//AdminStuff
/**
 * Registers user returns JWT token
 */
router.post('/auth/register', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const user = req.body.user;
    if (!user) {
        res.send(JSON.stringify({success: false, error: 'User not provided'}));
        return;
    }
    user.password = await auth.hashPassword(user.password);
    try {
        const createdUser = await models.Users.create(user);
        const token = auth.signJWT(createdUser._id);
        res.send(JSON.stringify({success: true, token: token}));
    } catch (e) {
        console.log(e);
        res.send(JSON.stringify({success: false}));
    }
});
/**
 * "logs in a user -> basically gives back JWT based on username/password"
 */
router.post('/auth/login', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const authBody = req.body.auth;
    if (!authBody) {
        res.send(JSON.stringify({success: false, error: 'Auth not provided'}));
        return;
    }
    const user = await models.Users.findOne({email: authBody.email});
    if (!user) {
        res.send(JSON.stringify({success: false, error: 'Username or password was incorrect'}));
        return;
    }
    if (await auth.comparePassword(authBody.password, user.password)) {
        res.send(JSON.stringify({token: auth.signJWT(user._id)}));
    } else {
        res.send(JSON.stringify({success: false, error: 'Username or password was incorrect'}))
    }
});
/**
 * Returns info for current user
 * Authorization headers must contain a valid token
 */
router.get('/users/info', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        const user = auth.verifyJWT(req.headers.authorization);
        if (user.success && 'id' in user) {
            const user_data = await models.Users.findOne({_id: mongoDB.ObjectId(user.id)}).select("-password -_id");
            if (!user_data) {
                res.send(JSON.stringify({error: 'User DNE'}))
            } else {
                res.send(JSON.stringify({success: true, user: user_data}));
            }
        } else {
            res.send(JSON.stringify({success: false}));
        }
    } catch (e) {
        res.send(JSON.stringify({success: false}));
    }
});
/**
 * Only accessible to admins. Gives user info for any user when passing in email in url params or all users.
 * Authorization headers must contain a valid token
 */
router.get('/users', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (!req.headers.authorization) {
        res.send(JSON.stringify({error: 'No auth in header'}));
        return;
    }

    let user = auth.verifyJWT(req.headers.authorization);
    if (!(user.success && 'id' in user)) {
        res.send(JSON.stringify({error: 'Bad Auth'}));
        return;
    }
    user = await models.Users.findOne({_id: mongoDB.ObjectId(user.id)});
    if (user.privileges.includes('admin')) {
        if ('email' in req.query) {
            const user_data = await models.Users.findOne({email: req.query.email}).select("-password -_id");
            if (!user_data) {
                res.send(JSON.stringify({'error': 'Could not find email'}));
            } else if ('image' in req.query && user_data.photo) {
                res.contentType('image/' + user_data.photo.split('.')[1]);
                await getFiles(res, user_data.photo);
            } else {
                res.send(JSON.stringify(user_data));
            }
        } else {
            const user_data = await models.Users.find().select("-password -_id");
            res.send(JSON.stringify(user_data));
        }
    } else {
        res.send(JSON.stringify({error: 'You are not admin go away'}));
    }
});
/**
 * takes in response and fileName and streams the file into response -> need not do res.Send in route :)
 * @param res
 * @param fileName
 * @returns {Promise<void>}
 */
const getFiles = async (res, fileName) => {
    const bucket = new mongoDB.GridFSBucket(await resourcesDb.db);
    bucket.openDownloadStreamByName(fileName).pipe(res);
};

module.exports = router;