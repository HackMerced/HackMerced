const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const shell = require('shelljs');
const log = require('simple-node-logger').createSimpleLogger(process.env.HMD_LOG);

const port = process.env.HMD_PORT || 9999;
const app = express();
const deploymentScript = process.env.HMD_LOC + process.env.HMD_SCRIPT;

const cloneAndRestartServer = (branch) => {
    shell.env['BRANCH'] = branch;
    shell.exec(deploymentScript);
}

const verifyGitHub = (req) => {
    if (!req.headers['user-agent'].includes('GitHub-Hookshot')) {
        return false;
    }
    const payload = JSON.stringify(req.body);
    const secret = process.env.GITHUB_WEBHOOK_SECRET;
    const ourSignature = `sha1=${crypto.createHmac('sha1', secret).update(payload).digest('hex')}`;
    const theirSignature = req.headers['x-hub-signature'];
    return crypto.timingSafeEqual(Buffer.from(theirSignature), Buffer.from(ourSignature));
};

const checkEvent = (req) => {
    const payload = req.body;
    if(payload.action == 'closed' && payload.pull_request.merged && (payload.pull_request.base.ref == 'master' || payload.pull_request.base.ref == 'dev')) {
        cloneAndRestartServer(payload.pull_request.base.ref);
    }
};

app.use(bodyParser.json());

app.post('/', (req, res) => {
    if (verifyGitHub(req)) {
        checkEvent(req);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Ok');
    } else {
        res.redirect(301, '/');
        res.end('Access denied');
    }
});

app.all('*', (req, res) => {
    res.redirect(301, '/');
    res.end('Access denied');
});

app.listen(port);

