const mongoDB = require('mongodb');
const resourcesDb = require('./db').resources;

/**
 * takes in response and fileName and streams the file into response -> need not do res.Send in route :)
 * @param res
 * @param fileName
 * @returns {Promise<void>}
 */
const streamFile = async (res, fileName) => {
    const bucket = new mongoDB.GridFSBucket(await resourcesDb.db);
    bucket.openDownloadStreamByName(fileName).pipe(res);
};

module.exports.streamFile = streamFile;