var AWS = require('aws-sdk');
AWS.config.loadFromPath('./awsconfig.json')
module.exports = {
    aws:AWS
}
