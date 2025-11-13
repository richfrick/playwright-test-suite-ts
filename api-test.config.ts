/*
    These are the environment specific variables, these can also be pulled from secrest server
*/

const env = process.env.ENV || 'dev';
console.log(`Running tests against against ${env}`);

const config = {
  appUrl: 'http://localhost:9090',
  authUrl: 'appUrl.com',
  usersUrl: 'userServiceUrl.com',
};

if (env === 'staging') {
  (config.appUrl = process.env.APP_URL),
    (config.authUrl = 'appUrl.com'),
    (config.usersUrl = 'userServiceUrl.com');
}
if (env === 'production') {
  (config.appUrl = process.env.APP_URL),
    (config.authUrl = 'appUrl.com'),
    (config.usersUrl = 'userServiceUrl.com');
}

export { config };
