module.exports = {
  apps : [
  {
    name      : 'hackmerced_placeholder',
    script    : '/opt/hackmerced_placehoder/server.js',
    env: {
      NODE_ENV: 'placeholder'
    }
  },
  {
    name      : 'hackmerced_master',
    script    : '/opt/hackmerced_master/server/server.js',
    env: {
      NODE_ENV: 'production',
      port: 4000
      db_username: 'user',
      db_password: 'password'
    }
  },
  {
    name      : 'hackmerced_dev',
    script    : '/opt/hackmerced_dev/server/server.js',
    env: {
      NODE_ENV: 'development',
      port: 3000,
      db_username: 'user',
      db_password: 'password'
    }
  },
  {
    name      : 'hackmerced_deployment',
    script    : '/opt/hackmerced_deployment/hmd.js',
    env: {
      NODE_ENV: 'development',
      HMD_PORT: '9999',
      HMD_LOC: '/opt/hackmerced_deployment',
      HMD_LOG: '/opt/hackmerced_deployment/hmd.log',
      HMD_SCRIPT: 'hmd.sh',
      GITHUB_WEBHOOK_SECRET: 'secret',
      PM2_ENV: '/home/pm2',
      BRANCH: 'master'
    }
  }],
};
