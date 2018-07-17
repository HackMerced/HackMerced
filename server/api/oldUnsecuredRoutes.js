//Volunteers
router.get('/users/volunteers', async (req, res) => {
    const type = 'volunteer';
    res.setHeader('Content-Type', 'application/json');
    if ('email' in req.query) {
        let volunteer_data = await models.Volunteers.findOne({email: req.query.email, type: type}).select("-password");
        if (!volunteer_data) {
            res.send(JSON.stringify({'error': 'Could not find email'}));
        } else {
            res.send(JSON.stringify(volunteer_data));
        }
    } else {
        const volunteer_data = await models.Volunteers.find({type: type}).select("-password");
        res.send(JSON.stringify(volunteer_data));
    }
});
//Hackers
router.get('/users/hackers', async (req, res) => {
    const type = 'hacker';
    res.setHeader('Content-Type', 'application/json');
    if ('email' in req.query) {
        const hacker_data = await models.Hackers.findOne({email: req.query.email, type: type}).select("-password");
        if (!hacker_data) {
            res.send(JSON.stringify({'error': 'Could not find email'}));
        } else {
            res.send(JSON.stringify(hacker_data));
        }
    } else {
        const hacker_data = await models.Hackers.find({type: type}).select("-password");
        res.send(JSON.stringify(hacker_data));
    }
});
//Sponsors
router.get('/users/sponsors', async (req, res) => {
    const type = 'sponsor';
    res.setHeader('Content-Type', 'application/json');
    if ('email' in req.query) {
        const sponsor_data = await models.Sponsors.findOne({email: req.query.email, type: type}).select("-password");
        if (!sponsor_data) {
            res.send(JSON.stringify({'error': 'Could not find email'}));
        } else if ('image' in req.query) {
            res.contentType('image/png');
            const resource = await mongo.resources();
            const bucket = new mongoDB.GridFSBucket(resource);
            await bucket.openDownloadStreamByName(sponsor_data.photo).pipe(res);
        } else {
            res.send(JSON.stringify(sponsor_data));
        }
    } else {
        const sponsor_data = await models.Sponsors.find({type: type}).select("-password");
        res.send(JSON.stringify(sponsor_data));
    }
});
//Judges
router.get('/users/judges', async (req, res) => {
    const type = 'judge';
    res.setHeader('Content-Type', 'application/json');
    if ('email' in req.query) {
        const judge_data = await models.Judges.findOne({email: req.query.email, type: type}).select("-password");
        if (!judge_data) {
            res.send(JSON.stringify({'error': 'Could not find email'}));
        } else if ('image' in req.query) {
            res.contentType('image/png');
            const resource = await mongo.resources();
            const bucket = new mongoDB.GridFSBucket(resource);
            await bucket.openDownloadStreamByName(judge_data.photo).pipe(res);
        } else {
            res.send(JSON.stringify(judge_data));
        }
    } else {
        const judge_data = await models.Judges.find({type: type}).select("-password");
        res.send(JSON.stringify(judge_data));
    }
});