module.exports = {
    'secret' : process.env.secret_key || 'supersecret',
    'dbUser' : process.env.db_username,
    //testing
    'dbPassword' : process.env.db_password
};